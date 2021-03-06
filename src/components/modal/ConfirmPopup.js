import React, { Component } from 'react';
import { Modal, Alert, AlertTitle, Typography, Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {'xs' : '80%', 'md':'400px'},
    minWidth: '140',
    boxShadow: 24,
    p: 4,
  };


class Alim extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <Modal open={this.props.open}  aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Alert severity='warning'  sx={style}  onClose={this.props.handleClose}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <AlertTitle sx={{fontFamily : 'NanumGothic'}}>Warning</AlertTitle>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily : 'NanumGothic' }}>{this.props.msg}</Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily : 'NanumGothic' }}>
                            <Button variant="contained" size="small" color='warning' sx={{mr : '5px'}} onClick={this.props.handleCallback}>확인</Button>
                            <Button variant="outlined" size="small" color='warning' onClick={this.props.handleClose}>취소</Button>
                        </Typography>
                    </Alert>
                </Modal>
            </div>
        );
    }
}

export default Alim;