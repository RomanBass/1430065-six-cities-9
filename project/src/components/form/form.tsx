import { useState, ChangeEvent, Fragment } from 'react';

function Form(): JSX.Element {
  const initialData = {
    rating: 0,
    review: '',
  };

  const [formData, setFormData] = useState(initialData);

  const correctReview = (evt: ChangeEvent) => {
    setFormData({ ...formData, review: (evt.target as HTMLTextAreaElement).value });
  };

  const stars: number[] = [5, 4, 3, 2, 1];

  const renderStars = stars.map((star) => {
    const titleValue = (starChecked: number) => {
      switch (starChecked) {
        case 5:
          return 'perfect';
        case 4:
          return 'good';
        case 3:
          return 'not bad';
        case 2:
          return 'baddly';
        case 1:
          return 'terribly';
      }
    };
    return (
      <Fragment key={star}>
        <input className="form__rating-input visually-hidden" name="rating" value={star} id={`${star}-stars`} type="radio"
          checked={formData.rating === star}
          onChange={() => {
            setFormData({ ...formData, rating: star });
          }}
        />
        <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title={titleValue(star)}>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </Fragment>
    );
  });

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {renderStars}
      </div>

      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={correctReview}
        value={formData.review}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default Form;
