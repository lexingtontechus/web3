// React + Web3 Essentials
import { useContext, useState, useRef } from "react";

// External Packages
// Internal Compoonents
//import { useResolveWeb3Name } from "hooks/useResolveWeb3Name";
import { createWeb3Name } from "@web3-name-sdk/core";

import { useConnectWallet } from "@web3-onboard/react";
import { ethers } from "ethers";

export default function Profile() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [address, setAddress] = useState();

  //const { account, disconnect, wallet, connect } = useAccount();

  // resolve web3 name
  const getDomainName = async (checksumWallet, setWeb3NameList) => {
    let domainName = "";
    const web3NameClient = createWeb3Name();
    web3NameClient
      .getDomainName({
        address: checksumWallet,
        queryChainIdList: appConfig.allowedNetworks,
      })
      .then(async (domain) => {
        if (domain) {
          domainName = domain;
          setWeb3NameList((prev) => ({ ...prev, [checksumWallet]: domain }));
        } else {
          domainName = null;
        }
      });
    return domainName;
  };

  useResolveWeb3Name(account);
  const web3Name = web3NameList[account];

  const dropdownValues = [
    {
      id: "walletAddress",
      value: account,
      title: account,
      function: () => {},
    },
    {
      id: "userSettings",
      value: "",
      title: "Settings",
      function: () => {},
      //to: APP_PATHS.UserSettings,
      invertedIcon: getPublicAssetPath("setting.svg"),
    },
    {
      id: "disconnect",
      value: "",
      function: async () => {
        setUserProfileUnlocked(false);
        removePGPKeyForUser(userPushSDKInstance.account);
        await disconnect(wallet);
        setMode(ReadOnlyWalletMode.GUEST_MODE);
        setReadOnlyWallet("0x0000000000000000000000000000000000000001");
        setShowDropdown(false);
        await initializePushSdkReadMode();
      },
      title: "LOGOUT",
      invertedIcon: getPublicAssetPath("logout.svg"),
    },
  ];

  useClickAway(toggleArrowRef, dropdownRef, () => {
    setShowDropdown(false);
  });

  const handleConnectWallet = () => {
    connect();
  };

  // to create blockies
  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <Wallet
              onClick={() => setShowDropdown(!showDropdown)}
              ref={toggleArrowRef}
            >
              {web3Name === null ? (
                <LoaderSpinner
                  type={LOADER_TYPE.SEAMLESS}
                  spinnerSize={20}
                  spinnerColor="#FFF"
                />
              ) : web3Name ? (
                <>{web3Name}</>
              ) : (
                <>{shortenText(account, 5)}</>
              )}
              {/* <SpanV2 fontWeight='600' margin='0 0 0 2px'>{!(wallet?.accounts?.length > 0) ? ReadOnlyWalletMode.GUEST_MODE : userPushSDKInstance?.readMode && ReadOnlyWalletMode.READ_ONLY_MODE}</SpanV2> */}
              <ToggleArrowImg
                filter={
                  isDarkMode
                    ? theme.snackbarBorderIcon
                    : "brightness(0) invert(1)"
                }
              >
                <img
                  alt="arrow"
                  className={`${showDropdown ? "down" : "up"}`}
                  src={getPublicAssetPath("svg/arrow.svg")}
                />
              </ToggleArrowImg>
            </Wallet>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
    </div>
  );
}
