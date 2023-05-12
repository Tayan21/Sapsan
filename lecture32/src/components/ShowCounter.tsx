import DateTimeDisplay from "./DateTimeDisplay";

export const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
    return (
      <div className="show-counter">
        <span className="countdown-link">
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
          <p>:</p>
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        </span>
      </div>
    );
  };