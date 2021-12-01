import { makeStyles } from '@material-ui/core/styles';
//importamos makestyles de material ui respectivamente
//exportamos makestyles, le hace un call a la funcino makestyles

// llamamos root: { } asi es con materiaui
export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display:'flex',
        justifyContent:'flex-end',
    },
    cardContent: {
        display:'flex',
        justifyContent: 'space-between',
    },
}));

//ahroa cada linea sirve para componente, en lugar de una infinidad.