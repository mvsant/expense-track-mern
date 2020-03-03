const styledListItem = {
    backgroundColor: '#fff',
    boxShadow: 'var(--box-shadow)',
    color: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '10px',
    margin: '10px 0',
}

export const borderPositive = {
    borderRight: '5px solid #2ecc71',
}
export const borderNegative = {
    borderRight: '5px solid #c0392b',
}

export const listItem = {
    light: {
        ...styledListItem,
    },
    dark: {
        ...styledListItem,
        backgroundColor: '#333',
        color: '#fff',
        filter: 'brightness(135%)',
    }
}

const styledDeleteButton = {
        cursor: 'pointer',
        backgroundColor: '#e74c3c',
        border: 0,
        color: '#fff',
        fontSize: '20px',
        lineHeight: '20px',
        padding: '2px 5px',
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translate(-100%, -50%)',
}

export const deleteButton = {
    light: {
        ...styledDeleteButton,
        transition: 'opacity 0.6s ease-out',
    },
    dark:{
        ...styledDeleteButton,
        filter: 'brightness(135%)',
        transition: 'opacity 0.6s ease-out',
    }
    
}

export const deleteButtonHover = {
    light: {
        ...styledDeleteButton,
        opacity: 0,
        transition: 'opacity 0.6s ease-out',
    },
    dark:{
        ...styledDeleteButton,
        filter: 'brightness(135%)',
        opacity: 0,
        transition: 'opacity 0.6s ease-out',
    }
}