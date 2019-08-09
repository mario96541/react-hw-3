import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoCard from './PhotoCard';
import Modal from './Modal';
import styles from './Gallery.module.css';
import styled from './PhotoCard.module.css';

class Gallery extends Component {
  state = {
    largeImageURL: '',
    modal: false,
  };

  componentDidUpdate(prevProps) {
    const { pictures } = this.props;
    if (prevProps.pictures !== pictures) {
      window.scrollTo(0, window.pageYOffset + 300);
    }
  }

  handleOpenModal = largeImageURL => {
    this.setState({ largeImageURL, modal: true });
  };

  handleCloseModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { pictures } = this.props;
    const { modal, largeImageURL } = this.state;

    return (
      <>
        {modal && (
          <Modal largeImg={largeImageURL} onClose={this.handleCloseModal} />
        )}
        <ul className={styles.gallery}>
          {pictures.map(picture => (
            <li key={picture.id} className={styled.galleryItem}>
              <PhotoCard
                likes={picture.likes}
                views={picture.views}
                comments={picture.comments}
                downloads={picture.downloads}
                webformatURL={picture.webformatURL}
                largeImageURL={picture.largeImageURL}
                openModal={this.handleOpenModal}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
Gallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      likes: PropTypes.number,
      views: PropTypes.number,
      comments: PropTypes.number,
      downloads: PropTypes.number,
      webformatURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Gallery;
