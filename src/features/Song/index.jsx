import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './AlbumList';

SongFeature.propTypes = {};

function SongFeature(props) {
    const albumList = [
        {
            id:1,
            name: 'Mixtape Chàng trai sơ mi hồng',
            thumbnailUrl: 'https://photo-playlist-zmp3.zadn.vn/s1/v3/radio?src=HavwqN7EYmrDGr6VBegSG044G8DtYy440GHOWZcAb51N0mdMFzoVLG841u5ftvXI20K1spNMdGzSOWABFRkT2bTZ08CWujvKMoLIY6kWbsTHBbUZRRVRAHO_6kygffi-N2uQkogXcseGVr7iUABCR4Ty0Uvxyvfk5teCxNwabsmVBG_lSFIKSKDlNUCsffyw0IPk-36gg3nAUoJlVERlBGewRgbyuUyi2Zrrh6QrxIfPE76hD-IxA5ew8lbXixrzNMvt-psrx7i0S2YxFhcgAHCtVErevl0UMSx-m6S5109VXuhXmCq47F06uaqIVYAQQRckNaaYPSmwCdq&cv=1&size=thumb/240_240', 
        },
        {
            id:2,
            name: 'Mixtape Chưa từng thương ai đến vậy',
            thumbnailUrl: 'https://photo-playlist-zmp3.zadn.vn/s3/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDywm8z0L0GLts-EZ5jLL4RVReVRLmvRJT9WWe1H05bCW67HW05R2Kk6B8YLKLTF6OrdojnYNKGSfc7Ta2mQLL7g9ipGOb0KKU0cnj1eJ1z7w7V1s3qU6aErSyc9D1yH4RHscuTXJKSSjoUUrYaK1H-xOSpTObPCBA1cmEfa7H5cjokChNLTLoprAucj9brICwDdWAKW35mxeJIFfI0FLJZqCuhrSrrKO_KqZVrnNqWviM61koDC3stdDzxX50Rp_yL_JB3EZSbvNe1A4LuV0D69PgeM6VlHMHCTLDVrfGNKFDx2MFZ-MPDgEZ9z&cv=1&size=thumb/240_240',
        },
        {
            id:3,
            name: 'Mixtape Em say rồi',
            thumbnailUrl: 'https://photo-playlist-zmp3.zadn.vn/s1/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzemDv010GJtstVY0mD31MEOzUANm8C5OrgrDzO1rn6tskFtby0L4JTTzMQ2WmI5jOybzCv1XaJ_Jg0dtT125wnVP7VC0jBNhXzaDyv5KD1wYcUs6CJHKBZUCpTDHaNGx1ppDKu6qDCkoUQXoKK0KwtOSYCRbP8VQncnBje7HKtkok8_7bTLNt-AuZyTrrLPV4zZVvoKrLdz6ZV_IS1Lp6dQewi9GLMEw5hZArqLqbfj6c0woP43ZtYFz-n5miKJCOhtx2NoQTt1RnkhSoLu256Cdq&cv=1&size=thumb/240_240',
        },
        {
            id:4,
            name: 'Mixtape Anh làm gì sai ',
            thumbnailUrl: 'https://photo-playlist-zmp3.zadn.vn/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzgmDv0K0H8tplVXLTG11E2Fjo815S67um_Y8bOLG4VtMxPrLbKKnYD8zB6MbWLIePea8zfKXvFhMw7moSL3mBXAPQ3Pbz50kGfbuDZI4uKvoZ1Y3CJIHIxBvNPRqL74Rvuduax4K56l7cUZY9A1KUmFyo5QGXCTAiumB9lGn4-l7MCzNu3K7JvTOhrS0DMRF5ZYF1t25Dky67Tf2883ZAcPTUe9GnUCAKmrAWjM15ixMROxdzBLZYxC8UqIWS4EhQTJ_acWsVxjedjF2Jy9ERjrQfgPp9z&cv=1&size=thumb/240_240',
        },
        {
            id:5,
            name: 'Mixtape Dù anh có khóc ngàn lần',
            thumbnailUrl: 'https://photo-playlist-zmp3.zadn.vn/s1/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzhmDf00WHCtsZRqbTN2KdIFT7HMrrPJzXcXDLPMWjDZ6A3WbbO2HJHBuZA1bHFHjfaoeCrNaH3yMBTptiPLGwz9SoFQrCM3kqbouyxJHONl23AZMX14XAyAis9Q4eIGRnmoTPj614TxYJBrt0NK1xYOfdSErKPBVbbbUiz7aHdxYZPh2nU0YsiADciVLu2ClrcsVWl20Gpgs7NgYWE3ZJ-PDtuAWLLRw8uYFWhM4qywsQ4ldbB2cYzCDlaIQg9QhYT2kHB1r9gi3PwTsDFtxuGjbemx0uBEJ9rpBNsLLT-P3eoVG&cv=1&size=thumb/240_240',
        },
        {
            id:6,
            name: 'Mixtape On the Ground',
            thumbnailUrl: 'https://photo-playlist-zmp3.zadn.vn/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzemDv01GH1tspVsru534RORj_QNmS1HDixZ8u9L5CPW3w1WL462Kg0SOYKLmfF68iwojra04GTe3pTaIf7LL3iUypHP0r6KETxcD5lGq1AvoERqpOUGXk-9f3NR1mV6xyabTTj6qP8xoEVtd4G11VZPStLEb9D9FXYmU8y6H1kxo-DfIrPLoIfBzwbBra4F_qsZVHwN5DlgJo0f7y7N3FzRzAaBmLVQVnlr_D-Kn8tlctRjIn0LMFeEuJl5mnF5SymXFmD1XeysNtTi1rTHdkFEZ9z&cv=1&size=thumb/240_240',
        },
    ];
    return (
        <div>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default SongFeature;