import "./hotelDetail.css";
import { Hotel } from "~types/hotels";
import { toPersianNumber } from "~utils/toPersianNumber";

const Page = (props: Hotel) => {
  return (
    <div className="hotel-details">
      <img src={props.image} alt={props.name} className="hotel-details-image" />
      <div className="hotel-details-info">
        <h1 className="hotel-details-name">{props.name}</h1>
        <p className="hotel-details-description">{props.description}</p>
        <p className="hotel-details-stars">{"⭐".repeat(props.stars)}</p>
        <p className="hotel-details-location">
          📍 موقعیت: {toPersianNumber(props.location.lat)},{" "}
          {toPersianNumber(props.location.long)}
        </p>
      </div>
      <div className="hotel-comments">
        <h3>کامنت‌ها:</h3>
        {props.comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Page };
