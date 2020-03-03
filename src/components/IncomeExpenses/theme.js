const styledContainer = {
    backgroundColor:'#ffffff',
    boxShadow: 'var(--box-shadow)',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0',
  }

  export const lineBar = {borderRight: '1px solid #dedede'};

  export const div = {
    flex: 1,
    textAlign: 'center',
  }

  export const container = {
      light: {
          ...styledContainer,
          backgroundColor:'#ffffff',
      },
      dark: {
        ...styledContainer,
        backgroundColor:'#444444',
        boxShadow: '0 1px 3px rgb(255, 255, 255), 0 1px 2px rgb(255, 255, 255)',
        filter: 'brightness(135%)',
      }
  }