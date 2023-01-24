const style = ({ name, bp }) => {
  const str = `
    .${name} {
      position: relative;
      &__controller {
        display: flex;
        @include bp994-block() {
          display: none;
        }
      }
      &__box {
        position: absolute;
        bottom: 0;
        left: 0;

        transform: translate(-300%, 100%);

        opacity: 0;
        @include bp${bp}-block() {
          position: relative;

          transform: translate(0, 0);
          opacity: 1;
        }
      }
    }

  `;
  return str;
};
module.exports = style;
