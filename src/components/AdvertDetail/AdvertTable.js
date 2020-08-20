import React from 'react'
import TextBox from '../TextBox'

import styles from './AdvertTable.module.css'

const AdvertTable = ({ advert }) => {
  return (
    <TextBox title="İlan Bilgileri" className={styles.body}>
      <div className={styles.table}>
        <span>İlan Türü:</span>
        <strong>{advert.type === 'kiralık' ? 'Kiralık' : 'Satılık'}</strong>
        <span>İlan Oluşturma Tarihi:</span>
        <strong>{advert.created_at}</strong>
        <span>Oda Sayısı:</span>
        <strong>{advert.roomcount}</strong>
        <span>Banyo Sayısı:</span>
        <strong>{advert.bathcount}</strong>
        <span>Metrekaresi (Brüt):</span>
        <strong>{advert.size}</strong>
        <span>Eşyalı:</span>
        <strong>{advert.furnished ? 'Evet' : 'Hayır'}</strong>
        <span>Bina Yaşı:</span>
        <strong>{advert.buildage}</strong>
        <span>Site İçerisinde:</span>
        <strong>{advert.incomplex ? 'Evet' : 'Hayır'}</strong>
        <span>Kat Sayısı:</span>
        <strong>{advert.floorcount}</strong>
        <span>Kullanım Durumu:</span>
        <strong>{advert.status}</strong>
        <span>Bulunduğu Kat:</span>
        <strong>{advert.floorcurrent}</strong>
        <span>Isıtma:</span>
        <strong>{advert.heating}</strong>
      </div>
    </TextBox>
  )
}

export default AdvertTable
