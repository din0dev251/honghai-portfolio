import React, { Component } from "react";
import { useTranslation } from "react-i18next";

const portfolioList = [
  {
    image: "image-adiary",
    category: "VueJS",
    title: "Adiary",
    description: `Manage feeding and lactation diary. Track baby's weight and sleep time`,
    link: "",
  },
  {
    image: "image-winmart",
    category: "ReacJS",
    title: "Winmart",
    description: "Winmart supermarket system",
    link: "https://winmart.vn/",
  },
  {
    image: "image-truehope",
    category: "ReactJS",
    title: "True Hope Hospital",
    description: "A injection system of hospital",
    link: "https://www.truehope.com/",
  },
  {
    image: "image-dexxxshot",
    category: "ReactJS",
    title: "Dexxxshot",
    description:
      "Buy and sell NFTs across your favorite NFT projects. (18+ content)",
    link: "https://www.dexxxshot.com/",
  },
  {
    image: "image-vinpearl",
    category: "ReactJS",
    title: "Vinpearl Booking",
    description: "Booking Tour, Flight, Hotel website",
    link: "https://booking.vinpearl.com/",
  },
  {
    image: "image-t99",
    category: "ReactJS",
    title: "T99 LMS",
    description: "Manager user, customer, asset warehouse, etc.",
    link: "https://t99.vn/",
  },
  {
    image: "image-osakan",
    category: "ReactJS",
    title: "業務支援ツール",
    description: "Manager,register user",
    link: "",
  },
  {
    image: "image-podland",
    category: "Wordpress",
    title: "Podland.vn",
    description: "e commerce cigarette electronique",
    link: "https://podland.vn/",
  },
  {
    image: "image-marinbikes",
    category: "Wordpress",
    title: "marinbikes",
    description: "e commerce bike",
    link: "https://marinbikes.vn/",
  },
  {
    image: "image-caretech",
    category: "ReactJS",
    title: "caretech",
    description: "Manager hospital",
    link: "",
  },
];

const ProjectsList = (props) => {
  const { t } = useTranslation();
  const { column, styevariation, item } = props;
  const list = portfolioList.slice(0, portfolioList.length);

  return (
    <React.Fragment>
      {list.map((value, index) => (
        <div className={`${column}`} key={index}>
          <div className={`portfolio ${styevariation}`}>
            <div className="thumbnail-inner">
              <div className={`thumbnail ${value.image}`}></div>
              <div className={`bg-blr-image ${value.image}`}></div>
            </div>
            <div className="content">
              <div className="inner">
                <p>{value.category}</p>
                <h4>
                  <a href={value.link} rel="noreferrer" target="_blank">
                    {value.title}
                  </a>
                  <p>{value.description}</p>
                </h4>
                <div className="portfolio-button">
                  {value.link !== "" && (
                    <a
                      className="rn-btn"
                      href={value.link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {t('button:view')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ProjectsList;
