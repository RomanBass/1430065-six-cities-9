import { useState, ChangeEvent } from 'react';

function Form(): JSX.Element {
  const initialData: {
    rating: number,
    review: string | null,
  } = {
    rating: 0,
    review: '',
  };
  const [formData, setFormData] = useState(initialData);

  const correctReview = (evt: ChangeEvent) => {
    setFormData({ ...formData, review: evt.target.textContent });
  };

  const stars: number[] = [5, 4, 3, 2, 1];

  const renderStarsInputs = stars.map((star) =>
    (
      <input key={star} className="form__rating-input visually-hidden" name="rating" value={star} id={`${star}-stars`} type="radio"
        checked={formData.rating === star}
        onChange={() => {
          setFormData({ ...formData, rating: star });
        }}
      />
    ));

  const renderStarsLabels = stars.map((star) =>
    (
      <label key={star} htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    ));

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {renderStarsInputs}
        {renderStarsLabels}
        {/* <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
          checked={formData.rating === 5}
          onChange={() => {
            setFormData({ ...formData, rating: 5 });
          }}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
          checked={formData.rating === 4}
          onChange={() => {
            setFormData({ ...formData, rating: 4 });
          }}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label> */}
      </div>

      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={correctReview}
      >{formData.review}
      </textarea>
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
