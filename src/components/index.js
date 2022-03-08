import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const Banner = ({ type, children }) => {
  let alertType = type;
  if (type === "tip") {
    alertType = "success";
  }
  if (type === "note") {
    alertType = "secondary";
  }
  return (
    <ThemeProvider theme={createTheme()}>
      <div
        className={`admonition admonition-${type} alert alert--${alertType}`}
      >
        <div className="admonition-heading">
          <h5>
            <span className="admonition-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
                ></path>
              </svg>
            </span>
            {type.toLowerCase()}
          </h5>
        </div>
        <div className="admonition-content">
          <p>{children}</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export const InfoBannerAboutGlobalVarsInDemos = () => (
  <Banner type="note">
    See{" "}
    <a href="/demos/#demo-environment">
      <b>
        <i>here</i>
      </b>
    </a>{" "}
    for more on the <code>GLOBAL_VARS</code> we use in our demos
  </Banner>
);

export const SiteConfig = () => {
  const usingDoxxxCtxxx = useDocusaurusContext();
  return <pre>{JSON.stringify(usingDoxxxCtxxx, null, 2)}</pre>;
};
