import React from 'react'
import cx from 'classnames'

import styles from '../styles/thumbnail-palceholder.module.css'

const ThumbnailPlaceholder = ({className, alt}) => {
  return (
    <div className={cx(styles.placeholder, className)}>
      <svg width="160" viewBox="0 0 286 246" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M118.55 207.57H104.19L103.21 212.88H116.33L114.7 221.77H101.69L100.71 227.35H115.34L113.77 236.46H89.3799L96.0499 198.52H120.17L118.55 207.57Z" fill="currentColor"/>
        <path d="M153.69 208.6C156.76 208.6 159.11 209.61 160.71 211.64C162.32 213.66 162.82 216.41 162.2 219.88L159.33 236.46H150.25L152.94 220.9C153.41 218.37 152.52 217.11 150.28 217.11C148 217.11 146.54 218.34 145.89 220.79L143.13 236.46H134.16L136.85 220.9C137.25 218.37 136.35 217.11 134.15 217.11C131.81 217.11 130.32 218.48 129.67 221.23L126.97 236.46H118L122.8 209.36H131.77L131.34 211.82C133.36 209.68 135.88 208.6 138.88 208.6C142.03 208.6 144.2 209.81 145.39 212.23C147.74 209.81 150.5 208.6 153.69 208.6Z" fill="currentColor"/>
        <path d="M164.13 236.46L167.18 219.05L171.06 196.89L180.07 196.65L176.12 219.21L173.1 236.45H164.13V236.46Z" fill="currentColor"/>
        <path d="M202.17 209.36H211.17L206.4 236.46H197.4L197.78 234.35C195.68 236.27 193.05 237.22 189.87 237.22C186 237.22 183.14 235.76 181.28 232.83C179.42 229.9 178.81 226.47 179.46 222.53C180.07 218.7 181.7 215.42 184.34 212.69C186.98 209.96 190.25 208.6 194.15 208.6C197.62 208.6 200.11 209.85 201.63 212.34L202.17 209.36ZM189.28 227.19C190.11 228.27 191.37 228.82 193.07 228.82C194.77 228.82 196.23 228.3 197.46 227.25C198.69 226.2 199.46 224.81 199.79 223.08V222.92C200.08 221.15 199.81 219.72 198.98 218.64C198.15 217.56 196.87 217.01 195.13 217.01C193.43 217.01 191.97 217.55 190.74 218.64C189.51 219.73 188.75 221.15 188.46 222.92C188.17 224.69 188.44 226.1 189.28 227.19Z" fill="currentColor"/>
        <path d="M242.44 209.36L231.06 222.96L238.1 236.46H228.45L222.68 224.49L220.57 236.46H211.6L218.29 198.52H227.26L223.45 220.1L232.08 209.36H242.44Z" fill="currentColor"/>
        <path d="M80.6599 177.77C84.9299 177.77 88.3899 176 91.0499 172.45L100.36 178.47C96.2199 184.17 90.6699 187.55 83.6999 188.61L83.3199 190.83C85.5999 191.88 86.5099 193.7 86.0399 196.28C85.2399 200.72 79.9599 202.59 70.1999 201.92L71.3999 195.01C75.3299 195.3 77.3999 195.01 77.6099 194.12C77.7399 193.4 76.6799 192.98 74.4399 192.85L75.2599 188.41C69.8099 187.35 65.6799 184.67 62.8699 180.36C60.0599 176.05 59.1399 170.96 60.1099 165.09C61.1699 158.54 64.1499 153.16 69.0799 148.93C73.9999 144.71 79.7399 142.59 86.2799 142.59C90.6299 142.59 94.3399 143.53 97.3999 145.41C100.46 147.29 102.8 149.88 104.4 153.17L94.0099 158.68C92.3199 155.34 89.3799 153.67 85.1999 153.67C81.7399 153.67 78.7299 154.78 76.1699 157C73.6099 159.22 72.0199 162.12 71.3899 165.71C70.7999 169.22 71.3499 172.1 73.0399 174.36C74.7499 176.64 77.2799 177.77 80.6599 177.77Z" fill="currentColor"/>
        <path d="M129.39 156.22H139.91L134.33 187.9H123.81L124.25 185.43C121.8 187.67 118.72 188.79 115 188.79C110.48 188.79 107.13 187.08 104.96 183.66C102.78 180.24 102.08 176.23 102.84 171.62C103.56 167.14 105.46 163.31 108.54 160.12C111.62 156.93 115.45 155.34 120.01 155.34C124.07 155.34 126.98 156.8 128.75 159.71L129.39 156.22ZM114.31 177.07C115.28 178.34 116.76 178.97 118.74 178.97C120.72 178.97 122.44 178.36 123.87 177.13C125.31 175.91 126.21 174.28 126.59 172.25V172.06C126.93 169.99 126.61 168.32 125.64 167.06C124.67 165.79 123.17 165.16 121.14 165.16C119.15 165.16 117.44 165.79 116.01 167.06C114.57 168.33 113.69 170 113.35 172.06C113.02 174.13 113.34 175.8 114.31 177.07Z" fill="currentColor"/>
        <path d="M176.47 156.22L163.16 172.12L171.4 187.9H160.12L153.37 173.91L150.9 187.9H140.41L148.23 143.55H158.72L154.27 168.78L164.36 156.23H176.47V156.22Z" fill="currentColor"/>
        <path d="M189.48 162.16C190.45 160.01 191.89 158.38 193.79 157.27C195.69 156.15 197.82 155.6 200.19 155.6L198.23 167.26C195.82 166.92 193.52 167.34 191.33 168.53C189.14 169.71 187.78 171.8 187.25 174.8L187.44 173.74L184.93 187.93H174.44L180.05 156.25H190.54L189.48 162.16Z" fill="currentColor"/>
        <path d="M225.82 156.22H236.34L230.76 187.9H220.24L220.68 185.43C218.23 187.67 215.15 188.79 211.43 188.79C206.91 188.79 203.56 187.08 201.39 183.66C199.21 180.24 198.51 176.23 199.27 171.62C199.99 167.14 201.89 163.31 204.97 160.12C208.05 156.93 211.88 155.34 216.44 155.34C220.5 155.34 223.41 156.8 225.18 159.71L225.82 156.22ZM210.74 177.07C211.71 178.34 213.19 178.97 215.17 178.97C217.15 178.97 218.87 178.36 220.3 177.13C221.74 175.91 222.64 174.28 223.02 172.25V172.06C223.36 169.99 223.04 168.32 222.07 167.06C221.1 165.79 219.6 165.16 217.57 165.16C215.58 165.16 213.87 165.79 212.44 167.06C211 168.33 210.12 170 209.78 172.06C209.45 174.13 209.77 175.8 210.74 177.07Z" fill="currentColor"/>
        <path d="M266.31 156.22L265.04 163.44L251.61 178.14H263.08L261.37 187.9H235.39L236.72 180.68L250.09 165.98H239.89L241.6 156.22H266.31Z" fill="currentColor"/>
        <path d="M62.33 37.22L62.5 36.58L60.47 34.9C60.47 34.9 61.84 34.89 62.29 34.56C62.85 30.98 64.57 25.36 64.57 25.36C64.57 25.36 63.29 26.8 61.07 27.77C58.84 28.74 57.57 28.8 56.1 29.94C56.84 30.92 58.57 32.11 58.57 32.11C58.57 32.11 57.27 31.91 55.66 31.64C53.25 33.6 52.89 34.65 52.89 34.65L54.86 36.82L48.2 34.07L54.5 37.32L51.66 36.62L51.52 37.33L53.76 38.95C53.76 38.95 51.69 38.07 51.26 38.19C51.24 42.52 53.26 45.54 54.98 48.17C55.9 46.21 58.29 44.88 58.29 44.88L56.55 44.06C56.55 44.06 58.05 43.97 58.48 43.81C59.85 41.4 61.39 37.69 61.39 37.69L63.98 38.34L60.66 36.68L62.33 37.22ZM58.5 35.78C58.33 36.11 58.17 36.45 58 36.78C57.83 37.11 57.68 37.45 57.52 37.78C57.36 38.11 57.22 38.46 57.06 38.79C56.91 39.13 56.77 39.47 56.63 39.82L56.24 40.86C55.74 42.26 55.35 43.69 55.09 45.17C55.11 43.67 55.38 42.17 55.8 40.72C55.91 40.36 56.02 40 56.15 39.64C56.28 39.29 56.41 38.93 56.55 38.58C56.69 38.23 56.84 37.88 57 37.54C57.16 37.2 57.31 36.85 57.48 36.52C57.82 35.85 58.17 35.18 58.53 34.52C58.9 33.87 59.28 33.22 59.67 32.58C60.45 31.3 61.27 30.05 62.11 28.81C61.48 30.17 60.77 31.49 60.07 32.81L59.02 34.79L58.5 35.78Z" fill="currentColor"/>
        <path d="M46.3699 37.76C45.3899 38.2 45.0699 38.79 45.0699 38.79C45.0699 38.79 44.9199 37.88 45.6099 37.26C45.3899 37.02 44.3399 37.6 44.3399 37.6C44.3399 37.6 45.7099 35.67 46.5599 34.93C44.8799 35.69 44.0899 37.03 44.0899 37.03L44.6399 35.42C44.6399 35.42 41.1099 32.08 37.6899 31.6C37.4399 31.67 37.0699 32.47 37.0699 32.47L37.3099 30.95L36.6899 32.08L37.2699 29.89C37.2699 29.89 36.8899 29.62 35.8799 31.37C33.4199 30.5 29.4299 30.79 29.4299 30.79C29.4299 30.79 32.7599 33.31 34.4599 37.54C35.2299 36.78 35.2599 36.01 35.2599 36.01C35.2599 36.01 35.5999 37.28 34.7599 40C35.5899 41.01 36.5599 40.69 36.5599 40.69C36.5599 40.69 37.6899 39.48 37.8599 38.63C37.8699 39.05 36.6499 41.76 36.6499 41.76C36.6499 41.76 37.9999 39.88 38.3499 39.01C38.2699 40.17 37.8399 41.56 37.8399 41.56C37.8399 41.56 39.7099 43.9 42.5599 45.31C43.3299 45.47 44.2399 43.64 44.2399 43.64L43.5899 46.23L44.7999 44.01C44.7999 44.01 44.3099 47.66 44.4699 48.56C44.9399 46.79 45.1299 46.27 45.1299 46.27C45.1299 46.27 47.0799 48.1 50.3599 47.74C53.6399 47.38 55.1099 48.48 55.1099 48.48C55.1099 48.48 49.7599 40.23 46.3699 37.76ZM47.5299 41.93C46.7999 41.4 46.0799 40.86 45.3499 40.33L44.2499 39.54L43.1499 38.76L42.0399 37.98L40.9299 37.21C40.1899 36.69 39.4399 36.19 38.6899 35.69C37.1899 34.69 35.6799 33.71 34.1399 32.75C35.7999 33.49 37.3799 34.36 38.9299 35.3C39.7099 35.76 40.4699 36.25 41.2299 36.74C41.9899 37.24 42.7299 37.75 43.4799 38.27C44.9499 39.32 46.3999 40.41 47.7999 41.56C49.1999 42.71 50.5599 43.91 51.8199 45.21C50.4099 44.1 48.9699 43.01 47.5299 41.93Z" fill="currentColor"/>
        <path d="M54.25 48.07C54.25 48.07 55.93 48.79 57.27 51.81C58.61 54.83 61.17 55.6 61.17 55.6C61.17 55.6 60.82 56.02 59.52 57.32C60.38 57 63.29 54.74 63.29 54.74L61.97 56.9L63.89 55.04C63.89 55.04 62.76 56.74 63.28 57.33C65.93 59.09 68.89 59.53 68.89 59.53C68.89 59.53 69.87 58.46 70.84 57.81C70.27 58.55 69.32 60.66 69.32 60.66C69.32 60.66 71.06 58.24 71.43 58.04C70.78 58.61 70.3 60.2 70.3 60.2C70.3 60.2 70.51 61.2 71.8 61.41C73.73 59.32 75 58.97 75 58.97C75 58.97 74.35 59.39 74.08 60.43C78.58 59.78 82.44 61.4 82.44 61.4C82.44 61.4 80.7 57.8 78.7 56.11C79.7 54.36 79.28 54.16 79.28 54.16L77.68 55.75L78.35 54.65L77.16 55.62C77.16 55.62 77.66 54.9 77.6 54.65C75.47 51.94 70.81 50.55 70.81 50.55L69.7 51.84C69.7 51.84 70.46 50.49 70.28 48.66C70.06 49.77 69.08 51.92 69.08 51.92C69.08 51.92 69.05 50.72 68.73 50.65C68.54 51.56 67.68 51.89 67.68 51.89C67.68 51.89 68.03 51.32 67.92 50.25C64.07 48.57 54.25 48.07 54.25 48.07ZM58.72 49.28C60.48 49.72 62.2 50.29 63.89 50.93C65.59 51.56 67.25 52.27 68.9 53.02C69.72 53.4 70.54 53.79 71.35 54.2C72.15 54.61 72.96 55.02 73.75 55.46C75.33 56.34 76.89 57.27 78.36 58.33C76.76 57.48 75.16 56.66 73.54 55.87C72.73 55.48 71.92 55.08 71.11 54.7L69.89 54.12L68.66 53.55L67.42 53L66.19 52.45C65.37 52.08 64.54 51.73 63.72 51.36C62.06 50.65 60.4 49.95 58.72 49.28Z" fill="currentColor"/>
        <path d="M47.3099 50.68C47.7499 50.79 48.7899 51.39 48.7899 51.39C48.7899 51.39 46.8899 50.78 45.9399 51.15C45.6099 51.32 45.1499 51.81 45.1499 51.81C45.1499 51.81 46.9599 52.09 47.7099 52.64C46.7499 52.37 44.8199 52.17 44.8199 52.17C44.8199 52.17 47.0499 52.83 47.3899 53.11C45.3699 52.84 44.1999 52.92 43.5999 53.32C42.9999 53.71 41.0199 56.66 40.5799 59.74C41.3199 59.74 42.4999 60.08 42.4999 60.08C42.4999 60.08 39.4599 59.85 38.1699 60.4C40.4799 60.36 41.6699 60.92 41.6699 60.92L39.8999 60.94L41.2299 61.41C41.2299 61.41 40.1199 61.28 39.5999 61.48C38.8099 63.36 39.5899 67.23 39.5899 67.23L40.5999 67.48L39.4999 67.56C39.4999 67.56 40.9999 72.09 41.3599 74.19C43.3699 70.7 44.5299 65.22 44.5299 65.22L43.6599 64.88L44.9299 65.04L45.2999 64.5L43.9699 64.2L46.2599 64.27L44.3399 63.61L46.1899 63.31C46.1899 63.31 48.2299 60.22 49.6699 58.12C49.4099 57.48 48.0899 57.13 48.0899 57.13L49.5299 57.38L49.2399 56.96L50.5099 57.3C50.5099 57.3 53.3699 55.05 54.3099 53.22C53.5199 52.49 52.5699 51.79 52.5699 51.79L54.2999 52.21L54.1699 51.68L54.6699 51.92C54.6699 51.92 55.2999 49.82 55.2899 48.17C55.2999 48.16 51.1799 48.13 47.3099 50.68ZM48.6099 54.35C48.2899 54.72 48.0099 55.12 47.7099 55.51C47.4099 55.89 47.1399 56.3 46.8599 56.7C46.5699 57.1 46.3099 57.51 46.0499 57.92C45.9199 58.13 45.7799 58.33 45.6599 58.54L45.2899 59.17C45.1699 59.38 45.0399 59.59 44.9199 59.8L44.5799 60.45L44.2399 61.1L43.9199 61.76C43.7099 62.2 43.4899 62.64 43.3099 63.09L43.0299 63.77C42.9299 63.99 42.8499 64.22 42.7599 64.45C42.0699 66.28 41.5499 68.17 41.2599 70.12C41.3099 68.15 41.7099 66.18 42.3299 64.3C42.4599 63.82 42.6599 63.36 42.8299 62.9C42.9999 62.43 43.2099 61.98 43.4099 61.53C43.5099 61.3 43.6099 61.08 43.7199 60.85L44.0599 60.19L44.3999 59.53C44.5199 59.31 44.6499 59.1 44.7699 58.89C45.7799 57.18 46.9399 55.56 48.2599 54.08C49.5799 52.6 51.0399 51.24 52.6999 50.17C51.1899 51.41 49.8499 52.84 48.6099 54.35Z" fill="currentColor"/>
        <path d="M74.7699 42.03L74.5699 43.12C74.5699 43.12 74.5199 42.21 73.8099 41.86C71.2099 40.55 68.4299 40.57 68.4299 40.57L68.3999 42.21L67.8299 40.74L64.8399 41.2L65.2199 42.36C65.2199 42.36 64.9299 41.7 64.1299 41.63C57.3399 43.46 55.8599 47.28 54.6299 48.54C58.4899 50.85 63.2499 47.85 63.2499 47.85L63.5199 46.18L64.4899 47.37L64.1399 45.73L65.2699 47.82L64.4999 44.76C64.4999 44.76 66.1299 45.93 66.0899 47.12C68.7499 46.15 75.0699 46.39 78.1099 47.48C77.1999 44.05 74.7699 42.03 74.7699 42.03ZM71.0799 43.84C69.4699 43.48 67.8199 43.33 66.1799 43.52C64.5499 43.69 62.9599 44.16 61.4299 44.79C59.8999 45.43 58.4299 46.22 56.9699 47.05C58.2899 46.02 59.7199 45.1 61.2499 44.37C61.4399 44.28 61.6299 44.18 61.8199 44.1L62.4099 43.87C62.6099 43.79 62.7999 43.71 62.9999 43.64L63.6099 43.45C63.8199 43.39 64.0199 43.32 64.2299 43.27L64.8599 43.14C65.2699 43.03 65.6999 43 66.1299 42.94C66.2399 42.93 66.3399 42.91 66.4499 42.91L66.7699 42.9L67.4099 42.88C67.6199 42.87 67.8399 42.89 68.0499 42.9L68.6899 42.93C69.1099 42.99 69.5399 43.04 69.9599 43.11C70.3799 43.21 70.7899 43.28 71.1999 43.4C72.8399 43.86 74.3799 44.56 75.8299 45.4C74.2699 44.78 72.6999 44.21 71.0799 43.84Z" fill="currentColor"/>
        <path d="M54.9599 47.8C54.2899 49.93 48.8799 74.64 52.1199 100.95C55.4899 101.7 61.4699 100.2 61.4699 100.2C61.4699 100.2 56.0299 93.31 54.7199 80.41C53.6599 69.94 53.0399 62.88 55.5499 48.15C55.7599 46.87 55.1699 47.15 54.9599 47.8Z" fill="currentColor"/>
        <path d="M285.62 123.88C285.62 123.88 180.42 89.81 78.66 132.28C78.66 132.28 -31.97 177.09 56.72 245.71C56.72 245.71 -10.49 217.7 1.63999 173.36C1.63999 173.36 14.94 119.68 132.34 105.68C132.34 105.68 209.12 97.28 271.67 117.58L179.72 11.5L122.66 78.02L140.98 99.14L131.76 100.19L96.29 59.35L44.94 120.03L31.29 125.75L95.94 48.97L117.41 73.36L179.72 0.0800171L285.62 123.88Z" fill="currentColor"/>
        <path d="M126.16 25.6C126.16 25.6 131.93 25.14 136.93 29.87C140.84 26.55 147.4 25.9 147.4 25.9C147.4 25.9 140.77 24.55 137.27 27.96C133 24.85 129.73 24.43 126.16 25.6Z" fill="currentColor"/>
        <path d="M98.3401 34.91C98.3401 34.91 108.05 36 114.84 45.43C122.39 41.18 133.47 42.19 133.47 42.19C133.47 42.19 122.9 37.84 116.02 42.37C109.91 35.85 104.63 34.11 98.3401 34.91Z" fill="currentColor"/>
        <path d="M179 50.22C174 51.37 169.75 55.63 168.5 60.63H179V50.22Z" fill="currentColor"/>
        <path d="M181 50.36V60.62H191.16C189.96 55.62 186 51.66 181 50.36Z" fill="currentColor"/>
        <path d="M181 72.8801C186 71.5801 189.97 67.6201 191.17 62.6201H181V72.8801Z" fill="currentColor"/>
        <path d="M168.5 62.6201C169.75 67.6201 174 71.8801 179 73.0301V62.6201H168.5Z" fill="currentColor"/>
        <path d="M94.9999 78.91C91.9999 79.59 89.8999 81.63 89.1599 84.63H94.9999V78.91Z" fill="currentColor"/>
        <path d="M97 78.9901V84.62H102.51C101.8 81.62 100 79.7501 97 78.9901Z" fill="currentColor"/>
        <path d="M97 92.25C100 91.49 101.8 89.62 102.51 86.62H97V92.25Z" fill="currentColor"/>
        <path d="M89.1599 86.62C89.8999 89.62 91.9999 91.66 94.9999 92.34V86.62H89.1599Z" fill="currentColor"/>
        </svg>
    </div>
  )
}

export default ThumbnailPlaceholder