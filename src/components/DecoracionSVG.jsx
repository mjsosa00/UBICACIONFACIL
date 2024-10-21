import { transform } from 'framer-motion';
import React from 'react';


const DecoracionSVG = ({
  width = "10vw",  // Ajuste responsivo
  height = "10vw", // Ajuste responsivo
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
  position = "absolute", // Por defecto, es absoluto
  style = {}
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={width}
    height={height}
    version="1.1"
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      imageRendering: 'optimizeQuality',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      position: position,
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      ...style
    }}
    viewBox="0 0 1608.7 1608.7"
  >
    <defs>
      <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="-7.12" y1="804.88" x2="1601.56" y2="804.88">
        <stop offset="0" style={{ stopOpacity: 1, stopColor: '#FFB11F' }} />
        <stop offset="1" style={{ stopOpacity: 1, stopColor: '#FF680A' }} />
      </linearGradient>
    </defs>
    <g>
      <ellipse cx="797.22" cy="804.88" rx="804.34" ry="804.33" fill="url(#id0)" />
    </g>
  </svg>
);

const PuntitosSVG = ({
  width = "100px",
  height = "100px",
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
  position = "absolute", // Por defecto, es absoluto
  transform = "",
  style = {}
}) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={width}
    height={height}
    version="1.1"
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      imageRendering: 'optimizeQuality',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      position: position,
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      transform: transform,
      ...style
    }}
    viewBox="0 0 900 900">
    <defs>
      <style type="text/css">
        {`.fil0 {fill:#EB5B38}`}
      </style>
    </defs>
    <g id="Camada_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer" />
      <path className="fil0" d="M62.44 16.77c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm0 791.32c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm760.88 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 -197.83c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm760.88 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 -197.83c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm760.88 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 -197.83c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm760.88 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm570.66 -197.83c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1zm-190.22 0c20.04,0 36.28,17.06 36.28,38.1 0,21.04 -16.24,38.1 -36.28,38.1 -20.04,0 -36.29,-17.06 -36.29,-38.1 0,-21.04 16.25,-38.1 36.29,-38.1z"/>
    </g>
  </svg>
);


const CirculoIzquierdaSVG = ({width = "100px",
  height = "100px",
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
  position = "absolute", // Por defecto, es absoluto
  transform = "",
  style = {}
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width={width} height={height} version="1.1"
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      imageRendering: 'optimizeQuality',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      position: position,
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      transform: transform,
      ...style
    }}
    viewBox="0 0 804.28 1608.7">
    <defs>
      <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="582.49" y1="254.21" x2="-591.04" y2="1354.49">
        <stop offset="0" style={{ stopOpacity: 1, stopColor: '#EB5B38' }} />
        <stop offset="1" style={{ stopOpacity: 1, stopColor: '#FF7C17' }} />
      </linearGradient>
    </defs>
    <g id="Camada_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer" />
      <path fill="url(#id0)" d="M-4.27 0.02c444.22,0 804.33,360.12 804.33,804.34 0,444.23 -360.11,804.33 -804.33,804.33l0 -1608.67z" />
    </g>
  </svg>
);


const CirculoDerechaSVG = ({
  width = "100px",
  height = "100px",
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
  position = "absolute", // Por defecto, es absoluto
  transform = "",
  style = {}
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width={width} height={height} version="1.1"
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      imageRendering: 'optimizeQuality',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      position: position,
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      transform: transform,
      ...style
    }}
    viewBox="0 0 804.28 1608.7">
    <defs>
      <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="582.49" y1="254.21" x2="-591.04" y2="1354.49">
        <stop offset="0" style={{ stopOpacity: 1, stopColor: '#EB5B38' }} />
        <stop offset="1" style={{ stopOpacity: 1, stopColor: '#FF7C17' }} />
      </linearGradient>
    </defs>
    <g id="Camada_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer"/>
      <path fill="url(#id0)" d="M797.11 1615.89c-444.23,0 -804.34,-360.1 -804.34,-804.33 0,-444.22 360.11,-804.34 804.34,-804.34l0 1608.67z"/>
    </g>
  </svg>
);


export { DecoracionSVG, PuntitosSVG, CirculoIzquierdaSVG, CirculoDerechaSVG };
