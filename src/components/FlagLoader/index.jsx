import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PropTypes from 'prop-types'
import "./styles.css";

const isDarkTheme = JSON.parse(window.localStorage.getItem('theme'));

const colors = {
  baseColor: isDarkTheme ? "#232e3a" : "#ebebeb",
  color:  isDarkTheme ? "#202a35" : "#dddddd",
  highlightColor: isDarkTheme ? "#1e2731" : "#cecece"
}

const FlagLoader = ({ singleFlag }) => {

  return (
    <SkeletonTheme baseColor={colors.baseColor} color={colors.color} highlightColor={colors.highlightColor}>
      <div className={`${singleFlag ? "single-flag" : "flag"}`}>
        <div className="flag__img">
          <Skeleton height={`${singleFlag ? "300px" : "100%"}`}  width="100%" />
        </div>
  
        <div className="flag__content">
          <h2 className="flag__content-title">
            <Skeleton width={`${singleFlag ? "300px" : "100%"}`} />
          </h2>
          <div className={singleFlag ? "grid" : ""}>
            <Skeleton
              count={singleFlag ? 4 : 3}
              style={{
                fontSize: `${singleFlag ? "16px" : "12px"}`,
                marginBottom: "10px",
              }}
              width={150}
            />
          </div>
          {singleFlag && (
            <div className="flex" style={{ marginTop: "70px" }}>
              <Skeleton
                count={3}
                height={"40px"}
                inline
                className="borders-loader"
              />
            </div>
          )}
        </div>
      </div>
    </SkeletonTheme>
  )
};

const ListOfFlagsLoader = ({ singleFlag }) => {
  return [...Array(20).keys()].map((idx) => (
    <FlagLoader singleFlag={singleFlag} key={idx} />
  ));
};

FlagLoader.propTypes = {
  singleFlag: PropTypes.bool.isRequired
}

ListOfFlagsLoader.propTypes = {
  singleFlag: PropTypes.bool.isRequired
}

export { FlagLoader, ListOfFlagsLoader };
