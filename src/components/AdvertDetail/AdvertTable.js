import React from 'react'
import TextBox from '../TextBox'

import styles from './AdvertTable.module.css'

const AdvertTable = ({ advert }) => {
  return (
    <TextBox title="İlan Bilgileri" className={styles.body}>
      <div className={styles.table}>
        <label>İlan Türü:</label>
        <span>{advert.type === 'kiralık' ? 'Kiralık' : 'Satılık'}</span>
        <label>İlan Oluşturma Tarihi:</label>
        <span>{advert.created_at}</span>
        <label>Oda Sayısı:</label>
        <span>{advert.roomcount}</span>
        <label>Banyo Sayısı:</label>
        <span>{advert.bathcount}</span>
        <label>Metrekaresi (Brüt):</label>
        <span>{advert.size}</span>
        <label>Eşyalı:</label>
        <span>{advert.furnished ? 'Evet' : 'Hayır'}</span>
        <label>Bina Yaşı:</label>
        <span>{advert.buildage}</span>
        <label>Site İçerisinde:</label>
        <span>{advert.incomplex ? 'Evet' : 'Hayır'}</span>
        <label>Kat Sayısı:</label>
        <span>{advert.floorcount}</span>
        <label>Isıtma:</label>
        <span>{advert.heating}</span>
        <label>Bulunduğu Kat:</label>
        <span>{advert.floorcurrent}</span>
      </div>
    </TextBox>
  )
}

export default AdvertTable
