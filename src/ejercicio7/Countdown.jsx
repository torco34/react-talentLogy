

export const Countdown = ({fecha}) => {
    const calculateDaysRemaining = () => {
        const currentDate = new Date();
        const targetDate = new Date(fecha);
        const timeDifference = targetDate.getTime() - currentDate.getTime();
        const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
        return daysRemaining;
      };
    const daysRemaining = calculateDaysRemaining();
  return (
    <div>
    <p>Quedan {daysRemaining} días para la fecha ...{fecha}....</p>
  </div>
  )
}
