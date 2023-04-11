import Icon from "@material-ui/core/Icon";
import { Loop } from "@material-ui/icons";

import Cached from "@material-ui/icons/Cached";
import { useEffect, useState } from "react";

export function Loading(props: any) {
  const [showEmpty, setShowEmpty] = useState(false);

  useEffect(() => {
    if (props.searching) {
      if (!showEmpty)
        setTimeout(() => {
          setShowEmpty(true);
        }, 400);
      else {
        setTimeout(() => {
          setShowEmpty(false);
        }, 400);
      }
    }
    // console.log(props.searching);
  }, [showEmpty, props.searching]);

  return (
    <>
      {props.searching ? (
        showEmpty ? (
          <div className="relative top-12 left-40 w-3  z-10">
            <Icon component={Loop} />
          </div>
        ) : (
          <div className="relative top-12 left-40 w-3 z-10">
            <Icon component={Cached} />
          </div>
        )
      ) : (
        <></>
      )}
    </>
  );
}
