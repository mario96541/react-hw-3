import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';

const PhotoCard = ({
  likes,
  views,
  comments,
  downloads,
  webformatURL,
  openModal,
  largeImageURL,
}) => (
  <div className={styles.photoCard}>
    <img src={webformatURL} alt="" />
    <div className={styles.stats}>
      <p className={styles.statsItem}>
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
    </div>
    <button
      type="button"
      className={styles.fullscreenButton}
      onClick={() => openModal(largeImageURL)}
    >
      <i className="material-icons">zoom_out_map</i>
    </button>
  </div>
);

PhotoCard.defaultProps = {
  likes: 0,
  views: 0,
  comments: 0,
  downloads: 0,
};

PhotoCard.propTypes = {
  likes: PropTypes.number,
  views: PropTypes.number,
  comments: PropTypes.number,
  downloads: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
export default PhotoCard;
