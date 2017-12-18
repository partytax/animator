import Palette from '../../Palette'

export default `
  .haiku-scroll::-webkit-scrollbar {
    width: 8px;
  }

  .haiku-scroll::-webkit-scrollbar-track {
    background: ${Palette.COAL};
  }

  .haiku-scroll::-webkit-scrollbar-thumb {
    background: ${Palette.BLACK};
  }
  `