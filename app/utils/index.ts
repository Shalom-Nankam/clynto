import { useState, useEffect, useCallback } from 'react';
import Web3Modal from 'web3modal';
import { ethers, BrowserProvider, Signer } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

interface WalletState {
  address: string;
  provider: BrowserProvider | null;
  signer: Signer | null;
}

interface UseWalletResult extends WalletState {
  connectWallet: () => Promise<void>;
  changeWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
}

export function useWallet(): UseWalletResult {
  const [web3Modal, setWeb3Modal] = useState<Web3Modal | null>(null);
  const [walletState, setWalletState] = useState<WalletState>({
    address: '',
    provider: null,
    signer: null,
  });

  useEffect(() => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            1: "https://ethereum.publicnode.com",
          },
        }
      },
      coinbasewallet: {
        package: CoinbaseWalletSDK,
        options: {
          appName: "My dApp",
          rpc: "https://ethereum.publicnode.com",
        }
      },
      injected: {
        display: {
          name: 'Metamask',
          description: 'Connect with the provider in your Browser'
        },
        package: null
      },
    };

    const modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: true,
      providerOptions,
    });

    setWeb3Modal(modal);
  }, []);

  const connectWallet = useCallback(async (): Promise<void> => {
    try {
      if (!web3Modal) throw new Error('Web3Modal not initialized.');
      const instance = await web3Modal.connect();
      const provider = new BrowserProvider(instance);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      
      setWalletState({ provider, signer, address });

      // Setup event listeners
      instance.on("accountsChanged", handleAccountsChanged);
      instance.on("chainChanged", handleChainChanged);
      instance.on("disconnect", handleDisconnect);

    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  }, [web3Modal]);

  const changeWallet = useCallback(async (): Promise<void> => {
    if (web3Modal) {
      await disconnectWallet();
      await connectWallet();
    }
  }, [web3Modal, connectWallet]);

  const disconnectWallet = useCallback(async (): Promise<void> => {
    if (web3Modal) {
      web3Modal.clearCachedProvider();
      setWalletState({ address: '', provider: null, signer: null });

      // Remove event listeners
      if (walletState.provider && 'removeAllListeners' in walletState.provider) {
        (walletState.provider as any).removeAllListeners();
      }
    }
  }, [web3Modal, walletState.provider]);

  const handleAccountsChanged = useCallback((accounts: string[]): void => {
    if (accounts.length > 0) {
      setWalletState(prev => ({ ...prev, address: accounts[0] }));
    } else {
      disconnectWallet();
    }
  }, [disconnectWallet]);

  const handleChainChanged = useCallback((): void => {
    // Reload the page when the chain changes
    window.location.reload();
  }, []);

  const handleDisconnect = useCallback((): void => {
    disconnectWallet();
  }, [disconnectWallet]);

  return {
    ...walletState,
    connectWallet,
    changeWallet,
    disconnectWallet,
  };
}