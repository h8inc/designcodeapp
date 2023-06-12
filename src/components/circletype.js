import CircleType from 'circletype';

export const initCircleType = () => {
  const element = document.querySelector('.circle-text');
  if (element) {
    const circleType = new CircleType(element);
    circleType.radius(200);
  }
};