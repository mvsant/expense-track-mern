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