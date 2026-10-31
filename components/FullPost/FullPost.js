import { Fragment } from "react";
import classes from "./FullPost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

import globalClasses from "../../styles/App.module.css";

const FullPost = (props) => {
  let classIMG = [classes.fullPost, classes.fullPostNotPodcast].join(" ");

  if (props.type === "PODCAST") {
    classIMG = [classes.fullPost, classes.fullPostPodcast].join(" ");
  }

  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="" />
      </Head>
      <div className={globalClasses.item_box_left}>
        <h1
          className={[
            globalClasses.section_title,
            globalClasses.section_title_article,
          ].join(" ")}
        >
          {props.title}
        </h1>

        {props.type === "INTROGONDO" ? (
          <p />
        ) : (
          <div className={globalClasses.date_article}>
            <FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true" />{" "}
            {props.date}
          </div>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: props.content }}
          className={classIMG}
        />
      </div>
    </Fragment>
  );
};

export default FullPost;
