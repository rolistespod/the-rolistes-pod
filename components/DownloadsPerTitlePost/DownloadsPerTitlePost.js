import { Fragment } from "react";
import classes from "./DownloadsPerTitlePost.module.css";

const DownloadsPerTitlePost = (props) => {
  return (
    <Fragment>
      <div className="item_box_left">
        <h1 className="section_title section_title_article">{props.title}</h1>
        {/* <p>{props.author}</p> */}

        <div
          dangerouslySetInnerHTML={{ __html: props.content }}
          className={classes.downloadsPost}
        />
      </div>
    </Fragment>
  );
};

export default DownloadsPerTitlePost;
