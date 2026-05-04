{\rtf1\ansi\ansicpg1252\cocoartf2869
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /* \uc0\u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \
   Luxera&Outfits \'97 script.js\
   Compatible con la estructura HTML v6 (Estilo Adidas / Liquid)\
   \uc0\u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552  */\
\
'use strict';\
\
/* \uc0\u9472 \u9472  DATOS DE PRODUCTOS \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \
   Cat\'e1logo completo con im\'e1genes de galer\'eda para cada jersey.\
   Orden: cat, title, price, desc, images[]\
   \uc0\u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472  */\
const PRODUCTS = \{\
  /* \uc0\u9472 \u9472  M\'c9XICO \u9472 \u9472  */\
  mex1: \{\
    cat: 'M\'e9xico',\
    title: 'Adidas Jersey Local Selecci\'f3n Nacional de M\'e9xico 26',\
    price: '$500 MXN',\
    desc: 'La playera oficial de la Selecci\'f3n Mexicana para el Mundial 2026. Fabricada con tecnolog\'eda AEROREADY que absorbe la humedad, manteni\'e9ndote fresco en todo momento. Dise\'f1o que combina la tradici\'f3n azteca con la modernidad del f\'fatbol actual.',\
    images: [\
      'https://i.ibb.co/KpckPxFr/image.png'\
    ]\
  \},\
  mex2: \{\
    cat: 'M\'e9xico',\
    title: 'Adidas Jersey Visitante Selecci\'f3n Nacional de M\'e9xico 26',\
    price: '$500 MXN',\
    desc: 'La versi\'f3n visitante del Tri para el Mundial 2026. Dise\'f1o elegante en tonos blancos con detalles nacionales que complementan el uniforme completo de la selecci\'f3n para el torneo m\'e1s importante del mundo.',\
    images: [\
      'https://i.ibb.co/zhZ8SgMx/Captura-de-pantalla-2026-05-02-a-la-s-11-50-26-a-m.png'\
    ]\
  \},\
  mex3: \{\
    cat: 'M\'e9xico',\
    title: 'Jersey Negro Manga Larga Selecci\'f3n Nacional de M\'e9xico',\
    price: '$600 MXN',\
    desc: 'Edici\'f3n oscura y poderosa de la selecci\'f3n mexicana en formato manga larga. Un dise\'f1o audaz que mezcla la identidad azteca con una est\'e9tica moderna y sofisticada, perfecta para coleccionistas.',\
    images: [\
      'https://i.ibb.co/Q3GZxw8r/Captura-de-pantalla-2026-05-02-a-la-s-12-02-34-p-m.png',\
      'https://i.ibb.co/1WQk5zZ/Captura-de-pantalla-2026-05-02-a-la-s-12-03-02-p-m.png',\
      'https://i.ibb.co/kstCYK8S/Captura-de-pantalla-2026-05-02-a-la-s-12-02-48-p-m.png'\
    ]\
  \},\
  mex4: \{\
    cat: 'M\'e9xico',\
    title: 'Adidas Jersey Retro Selecci\'f3n Nacional de M\'e9xico 86',\
    price: '$650 MXN',\
    desc: 'Revive la gloria del f\'fatbol con esta pieza de colecci\'f3n del Mundial de M\'e9xico 86. Un dise\'f1o ic\'f3nico que captura la esencia de una \'e9poca dorada, fabricado con materiales de alta calidad para el verdadero aficionado y coleccionista.',\
    images: [\
      'https://i.ibb.co/5xXBhwrk/Captura-de-pantalla-2026-05-02-a-la-s-12-07-53-p-m.png',\
      'https://i.ibb.co/Xv8S2W0/Captura-de-pantalla-2026-05-02-a-la-s-12-09-38-p-m.png',\
      'https://i.ibb.co/fdFMKXWm/Captura-de-pantalla-2026-05-02-a-la-s-12-09-33-p-m.png'\
    ]\
  \},\
  mex5: \{\
    cat: 'M\'e9xico',\
    title: 'Adidas Jersey Retro Selecci\'f3n Nacional de M\'e9xico 98',\
    price: '$650 MXN',\
    desc: 'Una joya del f\'fatbol mexicano de finales de los 90. Esta playera retro evoca momentos hist\'f3ricos con su dise\'f1o cl\'e1sico, los motivos aztecas y colores inconfundibles que marcaron toda una generaci\'f3n.',\
    images: [\
      'https://i.ibb.co/99z9PqZ1/Captura-de-pantalla-2026-05-02-a-la-s-12-11-21-p-m.png',\
      'https://i.ibb.co/V0K5y4vh/Captura-de-pantalla-2026-05-02-a-la-s-12-11-41-p-m.png',\
      'https://i.ibb.co/svVcqJvL/Captura-de-pantalla-2026-05-02-a-la-s-12-11-34-p-m.png'\
    ]\
  \},\
  mex6: \{\
    cat: 'M\'e9xico',\
    title: 'Chamarra Adidas M\'e9xico 86',\
    price: '$1,899 MXN',\
    desc: 'La chamarra definitiva para el fan\'e1tico de la selecci\'f3n. Inspirada en el ic\'f3nico equipo del 86, esta pieza de colecci\'f3n fusiona el legado hist\'f3rico con una confecci\'f3n premium que la convierte en la prenda m\'e1s exclusiva de tu guardarropa.',\
    images: [\
      'https://i.ibb.co/dwxMKLcN/Captura-de-pantalla-2026-05-02-a-la-s-12-13-22-p-m.png',\
      'https://i.ibb.co/vxyw9FcX/Captura-de-pantalla-2026-05-02-a-la-s-12-15-13-p-m.png',\
      'https://i.ibb.co/S4VtQm6q/Captura-de-pantalla-2026-05-02-a-la-s-12-15-09-p-m.png'\
    ]\
  \},\
\
  /* \uc0\u9472 \u9472  CLUB LE\'d3N \u9472 \u9472  */\
  leon4: \{\
    cat: 'Club Le\'f3n',\
    title: 'Charly Jersey Local Club Le\'f3n',\
    price: '$500 MXN',\
    desc: 'La playera local que representa la esencia de La Fiera en el coraz\'f3n de Le\'f3n. El jersey local Charly del Club Le\'f3n combina el verde esmeralda y negro ic\'f3nicos con una confecci\'f3n premium, perfecta para vivir cada partido con la m\'e1xima intensidad.',\
    images: [\
      'https://i.ibb.co/F4gJJdJM/Captura-de-pantalla-2026-05-02-a-la-s-12-18-06-p-m.png',\
      'https://i.ibb.co/wFwD7fmY/Captura-de-pantalla-2026-05-02-a-la-s-12-18-27-p-m.png',\
      'https://i.ibb.co/N6GB6NPC/Captura-de-pantalla-2026-05-02-a-la-s-12-18-21-p-m.png'\
    ]\
  \},\
  leon2: \{\
    cat: 'Club Le\'f3n',\
    title: 'Charly Jersey Visitante Club Le\'f3n',\
    price: '$500 MXN',\
    desc: 'El jersey visitante de La Fiera, dise\'f1ado para conquistar cualquier estadio. Combina comodidad, identidad de marca y el orgullo del equipo m\'e1s pasional de la Liga MX con un acabado premium.',\
    images: [\
      'https://i.ibb.co/HDk7jCh2/Captura-de-pantalla-2026-05-02-a-la-s-12-22-29-p-m.png',\
      'https://i.ibb.co/B2njzDt0/Captura-de-pantalla-2026-05-02-a-la-s-12-22-49-p-m.png',\
      'https://i.ibb.co/nMzZCc2d/Captura-de-pantalla-2026-05-02-a-la-s-12-22-43-p-m.png'\
    ]\
  \},\
  leon3: \{\
    cat: 'Club Le\'f3n',\
    title: 'Charly Jersey Mundial de Clubes Club Le\'f3n',\
    price: '$600 MXN',\
    desc: 'La Fiera en el escenario m\'e1s grande del mundo. Este jersey edici\'f3n especial del Mundial de Clubes captura la historia del Club Le\'f3n con detalles \'fanicos, tecnolog\'eda premium y la pasi\'f3n de todo Guanajuato en cada costura.',\
    images: [\
      'https://i.ibb.co/21bY70YW/Captura-de-pantalla-2026-05-02-a-la-s-12-24-33-p-m.png',\
      'https://i.ibb.co/tw37k1n4/Captura-de-pantalla-2026-05-02-a-la-s-12-25-07-p-m.png',\
      'https://i.ibb.co/YTQzG6Sq/Captura-de-pantalla-2026-05-02-a-la-s-12-25-00-p-m.png'\
    ]\
  \},\
\
  /* \uc0\u9472 \u9472  CHIVAS \u9472 \u9472  */\
  chivas1: \{\
    cat: 'Chivas',\
    title: 'Puma Jersey Local Chivas',\
    price: '$500 MXN',\
    desc: 'Porta los colores del Reba\'f1o Sagrado con la versi\'f3n local m\'e1s reciente. Dise\'f1ada para ofrecer m\'e1xima comodidad y frescura, con el ic\'f3nico dise\'f1o a rayas rojiblancos que hace latir m\'e1s fuerte a los chivahermanos.',\
    images: [\
      'https://i.ibb.co/35W2NdwN/Captura-de-pantalla-2026-05-02-a-la-s-12-31-36-p-m.png',\
      'https://i.ibb.co/S9JqyH9/Captura-de-pantalla-2026-05-02-a-la-s-12-31-58-p-m.png',\
      'https://i.ibb.co/KxwnhfYQ/Captura-de-pantalla-2026-05-02-a-la-s-12-31-51-p-m.png'\
    ]\
  \},\
  chivas2: \{\
    cat: 'Chivas',\
    title: "Atletica Jersey '99 Chivas",\
    price: '$650 MXN',\
    desc: "Una reliquia del f\'fatbol mexicano. La playera del '99 de las Chivas captura el esp\'edritu de una era ic\'f3nica con su dise\'f1o cl\'e1sico y aut\'e9ntico, fabricada para los verdaderos coleccionistas del Reba\'f1o.",\
    images: [\
      'https://i.ibb.co/C382ZmmY/Captura-de-pantalla-2026-05-02-a-la-s-12-34-16-p-m.png',\
      'https://i.ibb.co/67VmR7Wj/Captura-de-pantalla-2026-05-02-a-la-s-12-34-44-p-m.png',\
      'https://i.ibb.co/Nddk2QDy/Captura-de-pantalla-2026-05-02-a-la-s-12-34-39-p-m.png'\
    ]\
  \},\
\
  /* \uc0\u9472 \u9472  AM\'c9RICA \u9472 \u9472  */\
  ame1: \{\
    cat: 'Am\'e9rica',\
    title: 'Adidas Jersey Local Club Am\'e9rica',\
    price: '$500 MXN',\
    desc: 'Las \'c1guilas vuelan alto con su jersey local de temporada. El dise\'f1o en amarillo crema y azul marino es s\'edmbolo de grandeza, confeccionado con materiales premium para el seguidor m\'e1s exigente del conjunto americanista.',\
    images: [\
      'https://i.ibb.co/C5Z9Brk2/Captura-de-pantalla-2026-05-02-a-la-s-12-37-52-p-m.png',\
      'https://i.ibb.co/XfwRxMvs/Captura-de-pantalla-2026-05-02-a-la-s-12-38-07-p-m.png',\
      'https://i.ibb.co/VYccyPpP/Captura-de-pantalla-2026-05-02-a-la-s-12-38-01-p-m.png'\
    ]\
  \},\
  ame2: \{\
    cat: 'Am\'e9rica',\
    title: 'Adidas Jersey Visitante Club Am\'e9rica',\
    price: '$500 MXN',\
    desc: 'El \'e1guila tambi\'e9n conquista de visita. Este jersey con tonos alternos mantiene la esencia americanista con un toque moderno, tecnolog\'eda de punta y comodidad excepcional para el fan\'e1tico en cualquier estadio.',\
    images: [\
      'https://i.ibb.co/KYGmhp7/Captura-de-pantalla-2026-05-02-a-la-s-12-38-26-p-m.png'\
    ]\
  \},\
\
  /* \uc0\u9472 \u9472  REAL MADRID \u9472 \u9472  */\
  rm1: \{\
    cat: 'Real Madrid',\
    title: 'Adidas Jersey Real Madrid Local',\
    price: '$500 MXN',\
    desc: 'Porta los colores del club m\'e1s laureado de Europa. El blanco impoluto del Real Madrid con detalles premium representa la elegancia y el palmar\'e9s de los Merengues, la camiseta definitiva para un campe\'f3n.',\
    images: [\
      'https://i.ibb.co/8Dsxx85z/Captura-de-pantalla-2026-05-02-a-la-s-12-59-57-p-m.png',\
      'https://i.ibb.co/h1mmQXJk/Captura-de-pantalla-2026-05-02-a-la-s-1-00-24-p-m.png',\
      'https://i.ibb.co/4RWj3n2r/Captura-de-pantalla-2026-05-02-a-la-s-1-00-15-p-m.png'\
    ]\
  \},\
  rm2: \{\
    cat: 'Real Madrid',\
    title: 'Adidas Jersey Real Madrid 2011-12 (Detalles Dorados)',\
    price: '$650 MXN',\
    desc: 'La temporada de la d\'e9cima gloria. Esta playera de 2011-12 es una pieza de colecci\'f3n que captura el esp\'edritu de un Madrid campe\'f3n, con sus inconfundibles detalles dorados que la hacen irresistible para todo aficionado.',\
    images: [\
      'https://i.ibb.co/4ggh5t0D/Captura-de-pantalla-2026-05-02-a-la-s-1-00-35-p-m.png',\
      'https://i.ibb.co/v4Db9Q8w/Captura-de-pantalla-2026-05-02-a-la-s-1-01-11-p-m.png',\
      'https://i.ibb.co/Zz1DWyL1/Captura-de-pantalla-2026-05-02-a-la-s-1-01-07-p-m.png'\
    ]\
  \},\
  rm3: \{\
    cat: 'Real Madrid',\
    title: 'Adidas Jersey Real Madrid 1986-87',\
    price: '$650 MXN',\
    desc: 'Un viaje en el tiempo al Real Madrid de los ochenta. Esta pieza retro evoca el f\'fatbol cl\'e1sico europeo con su dise\'f1o aut\'e9ntico y minimalista, perfecta para coleccionistas que aprecian la historia del deporte rey.',\
    images: [\
      'https://i.ibb.co/YFYSdhTF/Captura-de-pantalla-2026-05-02-a-la-s-1-01-36-p-m.png',\
      'https://i.ibb.co/hxSsMZcW/Captura-de-pantalla-2026-05-02-a-la-s-1-02-23-p-m.png',\
      'https://i.ibb.co/6cNn1cpC/Captura-de-pantalla-2026-05-02-a-la-s-1-02-09-p-m.png'\
    ]\
  \},\
\
  /* \uc0\u9472 \u9472  BARCELONA \u9472 \u9472  */\
  barca1: \{\
    cat: 'Barcelona',\
    title: 'Nike Jersey Local Barcelona',\
    price: '$500 MXN',\
    desc: 'Porta los colores azulgrana del club m\'e1s apasionado del mundo. La camiseta local del Bar\'e7a con tecnolog\'eda Dri-FIT te ofrece comodidad y estilo para vivir el f\'fatbol con la misma intensidad que el Camp Nou.',\
    images: [\
      'https://i.ibb.co/qYhXLHn4/Captura-de-pantalla-2026-05-02-a-la-s-12-50-07-p-m.png',\
      'https://i.ibb.co/XxYHsTwy/Captura-de-pantalla-2026-05-02-a-la-s-12-50-38-p-m.png',\
      'https://i.ibb.co/6R7Jrpcy/Captura-de-pantalla-2026-05-02-a-la-s-12-50-31-p-m.png'\
    ]\
  \},\
  barca2: \{\
    cat: 'Barcelona',\
    title: 'Nike Jersey Retro 92/95 Barcelona Home',\
    price: '$650 MXN',\
    desc: 'Revive la era dorada del Dream Team. Esta playera retro 92/95 del Barcelona es una obra de arte del f\'fatbol cl\'e1sico, con un dise\'f1o ic\'f3nico que captura la gloria de una generaci\'f3n irrepetible para el verdadero cul\'e9.',\
    images: [\
      'https://i.ibb.co/PZhbmC6m/Captura-de-pantalla-2026-05-02-a-la-s-12-51-37-p-m.png',\
      'https://i.ibb.co/wF0Z0dJW/Captura-de-pantalla-2026-05-02-a-la-s-12-52-23-p-m.png',\
      'https://i.ibb.co/bMQ4jZwd/Captura-de-pantalla-2026-05-02-a-la-s-12-52-17-p-m.png'\
    ]\
  \},\
  barca3: \{\
    cat: 'Barcelona',\
    title: 'Barcelona 2000/01 Home Retro Skeleton Travis Scott Edition',\
    price: '$650 MXN',\
    desc: 'La colaboraci\'f3n m\'e1s inesperada y exclusiva del f\'fatbol. La cl\'e1sica playera del Bar\'e7a 2000/01 reinterpretada por el universo creativo de Travis Scott, con el dise\'f1o Skeleton que la convierte en una pieza de edici\'f3n absolutamente limitada.',\
    images: [\
      'https://i.ibb.co/4ZTLV4Xm/Captura-de-pantalla-2026-05-02-a-la-s-12-52-35-p-m.png',\
      'https://i.ibb.co/CsYC4WPD/Captura-de-pantalla-2026-05-02-a-la-s-12-53-00-p-m.png',\
      'https://i.ibb.co/1YrB1SGH/Captura-de-pantalla-2026-05-02-a-la-s-12-52-49-p-m.png'\
    ]\
  \},\
\
  /* \uc0\u9472 \u9472  COLOMBIA \u9472 \u9472  */\
  col1: \{\
    cat: 'Colombia',\
    title: 'Adidas Jersey Colombia Local',\
    price: '$500 MXN',\
    desc: 'La selecci\'f3n cafetera en todo su esplendor. El jersey local de Colombia con su inconfundible amarillo vibrante, franja azul y detalles rojos irradia la alegr\'eda y la garra del pueblo colombiano en cada partido.',\
    images: [\
      'https://i.ibb.co/7x4kZCBy/Captura-de-pantalla-2026-05-02-a-la-s-1-17-36-p-m.png',\
      'https://i.ibb.co/CpgpgnxD/Captura-de-pantalla-2026-05-02-a-la-s-1-17-52-p-m.png',\
      'https://i.ibb.co/qFdMXZ6D/Captura-de-pantalla-2026-05-02-a-la-s-1-17-45-p-m.png'\
    ]\
  \},\
\
  /* \uc0\u9472 \u9472  ESPA\'d1A \u9472 \u9472  */\
  esp1: \{\
    cat: 'Espa\'f1a',\
    title: 'Adidas Jersey Espa\'f1a Visitante',\
    price: '$500 MXN',\
    desc: 'La Roja en su versi\'f3n visitante, con una est\'e9tica fresca y moderna que mantiene la esencia del campe\'f3n del mundo. Dise\'f1ada con materiales de alta tecnolog\'eda para rendir al nivel de los mejores del planeta.',\
    images: [\
      'https://i.ibb.co/zhbkFtJt/Captura-de-pantalla-2026-05-02-a-la-s-1-11-06-p-m.png',\
      'https://i.ibb.co/cScKVh1D/Captura-de-pantalla-2026-05-02-a-la-s-1-11-39-p-m.png',\
      'https://i.ibb.co/QvB3yTsq/Captura-de-pantalla-2026-05-02-a-la-s-1-11-37-p-m.png'\
    ]\
  \},\
  esp2: \{\
    cat: 'Espa\'f1a',\
    title: 'Adidas Jersey Espa\'f1a Local',\
    price: '$500 MXN',\
    desc: 'La inconfundible camiseta roja de La Furia Espa\'f1ola. S\'edmbolo de dominio europeo y mundial, este jersey local combina la pasi\'f3n espa\'f1ola con una confecci\'f3n premium que te har\'e1 sentir parte de la historia.',\
    images: [\
      'https://i.ibb.co/whnXDyzc/Captura-de-pantalla-2026-05-02-a-la-s-1-11-55-p-m.png',\
      'https://i.ibb.co/ksGctC7T/Captura-de-pantalla-2026-05-02-a-la-s-1-12-11-p-m.png',\
      'https://i.ibb.co/jkB4Y9VQ/Captura-de-pantalla-2026-05-02-a-la-s-1-12-07-p-m.png'\
    ]\
  \},\
\
  /* \uc0\u9472 \u9472  F1 \u9472 \u9472  */\
  f11: \{\
    cat: 'F1',\
    title: 'Camiseta R\'e9plica Logo Blanco Tommy Hilfiger x Cadillac F1 Team',\
    price: '$550 MXN',\
    desc: 'La fusi\'f3n perfecta entre el automovilismo de alto rendimiento y la moda urbana de lujo. Esta camiseta exclusiva de la colaboraci\'f3n Tommy Hilfiger y Cadillac F1 destaca por sus detalles bordados y un estilo sofisticado \'fanico en su clase.',\
    images: [\
      'https://i.ibb.co/6JH36Cxz/Captura-de-pantalla-2026-05-02-a-la-s-1-21-28-p-m.png'\
    ]\
  \},\
  f12: \{\
    cat: 'F1',\
    title: 'Unisex Tommy Hilfiger x Cadillac F1 Team Black Replica Polo',\
    price: '$550 MXN',\
    desc: 'El polo negro de la colecci\'f3n Cadillac F1 x Tommy Hilfiger es la pieza lifestyle m\'e1s codiciada de la temporada. Dise\'f1o unisex con bordados de lujo que combinan velocidad, elegancia y un estilo cosmopolita inigualable.',\
    images: [\
      'https://i.ibb.co/HTmDh0QR/Captura-de-pantalla-2026-05-02-a-la-s-6-05-44-p-m.png'\
    ]\
  \}\
\};\
\
/* \uc0\u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \
   1. CAMBIO DE CATEGOR\'cdA\
   \uc0\u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552  */\
function switchCat(cat) \{\
  // Ocultar todas las secciones, mostrar la activa\
  document.querySelectorAll('.cat-section').forEach(s => s.classList.remove('active'));\
  const target = document.getElementById('cat-' + cat);\
  if (target) target.classList.add('active');\
\
  // Resaltar pesta\'f1a activa en la barra de categor\'edas\
  document.querySelectorAll('.category-tabs button').forEach(b => \{\
    b.classList.toggle('active', b.dataset.cat === cat);\
  \});\
\
  // Resaltar enlace activo en el men\'fa lateral\
  document.querySelectorAll('#mobileMenu a[data-menucat]').forEach(a => \{\
    a.classList.toggle('active-cat', a.dataset.menucat === cat);\
  \});\
\
  // Limpiar b\'fasqueda y restaurar visibilidad de secciones\
  clearSearch();\
\
  // Scroll suave al inicio del cat\'e1logo\
  window.scrollTo(\{ top: 0, behavior: 'smooth' \});\
\}\
\
/* \uc0\u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \
   2. BUSCADOR EN TIEMPO REAL\
   \uc0\u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552  */\
const searchInput = document.getElementById('mainSearchInput');\
\
function clearSearch() \{\
  if (searchInput) searchInput.value = '';\
  document.body.classList.remove('search-mode');\
\
  // Restaurar visibilidad de todas las tarjetas y secciones\
  document.querySelectorAll('.product-card').forEach(c => c.classList.remove('hidden-by-search'));\
  document.querySelectorAll('.cat-section').forEach(s => \{ s.style.display = ''; \});\
  const noResults = document.getElementById('noResults');\
  if (noResults) noResults.style.display = 'none';\
\}\
\
if (searchInput) \{\
  // Filtrado en tiempo real mientras el usuario escribe\
  searchInput.addEventListener('input', function () \{\
    const query = this.value.trim().toLowerCase();\
\
    if (!query) \{\
      clearSearch();\
      return;\
    \}\
\
    document.body.classList.add('search-mode');\
\
    let visibleCount = 0;\
    document.querySelectorAll('.product-card').forEach(card => \{\
      const title = (card.querySelector('.product-title')?.textContent || '').toLowerCase();\
      const cat   = (card.querySelector('.product-category')?.textContent || '').toLowerCase();\
      const matches = title.includes(query) || cat.includes(query);\
      card.classList.toggle('hidden-by-search', !matches);\
      if (matches) visibleCount++;\
    \});\
\
    // Ocultar secciones vac\'edas durante la b\'fasqueda\
    document.querySelectorAll('.cat-section').forEach(section => \{\
      const visible = section.querySelectorAll('.product-card:not(.hidden-by-search)').length;\
      section.style.display = visible > 0 ? 'block' : 'none';\
    \});\
\
    const noResults = document.getElementById('noResults');\
    if (noResults) noResults.style.display = visibleCount === 0 ? 'block' : 'none';\
  \});\
\
  // Cerrar b\'fasqueda con tecla Escape\
  searchInput.addEventListener('keydown', function (e) \{\
    if (e.key === 'Escape') \{\
      clearSearch();\
      this.blur();\
      switchCat('mexico');\
    \}\
  \});\
\}\
\
/* \uc0\u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \
   3. MEN\'da HAMBURGUESA (Panel lateral)\
   \uc0\u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552  */\
let menuOpen = false;\
\
function toggleMobileMenu() \{\
  menuOpen = !menuOpen;\
  _applyMenuState();\
\}\
\
function closeMobileMenu() \{\
  menuOpen = false;\
  _applyMenuState();\
\}\
\
function _applyMenuState() \{\
  const menu    = document.getElementById('mobileMenu');\
  const overlay = document.getElementById('menuOverlay');\
  const icon    = document.getElementById('hamburgerIcon');\
\
  if (menu)    menu.classList.toggle('open', menuOpen);\
  if (overlay) overlay.classList.toggle('open', menuOpen);\
  if (icon)    icon.className = menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';\
\
  // Bloquear scroll del body cuando el men\'fa est\'e1 abierto\
  document.body.style.overflow = menuOpen ? 'hidden' : '';\
\}\
\
/* \uc0\u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \
   4. VISTA DETALLADA \'97 Modal Liquid (glassmorphism)\
   \uc0\u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552  */\
\
/**\
 * Abre la vista de detalle de un producto.\
 * @param \{string\} id \'97 clave del producto en el objeto PRODUCTS\
 */\
function openDetail(id) \{\
  const p = PRODUCTS[id];\
  if (!p) \{\
    console.warn('[Luxera] Producto no encontrado:', id);\
    return;\
  \}\
\
  // Rellenar campos de texto\
  const elCat   = document.getElementById('detailCat');\
  const elTitle = document.getElementById('detailTitle');\
  const elDesc  = document.getElementById('detailDesc');\
  const elPrice = document.getElementById('detailPrice');\
\
  if (elCat)   elCat.textContent   = p.cat;\
  if (elTitle) elTitle.textContent = p.title;\
  if (elDesc)  elDesc.textContent  = p.desc;\
  if (elPrice) elPrice.textContent = p.price;\
\
  // Imagen principal \'97 primera imagen del array\
  const mainImg = document.getElementById('detailMainImg');\
  if (mainImg) \{\
    mainImg.src = p.images[0];\
    mainImg.alt = p.title;\
  \}\
\
  // Galer\'eda de miniaturas\
  const thumbsEl = document.getElementById('detailThumbs');\
  if (thumbsEl) \{\
    thumbsEl.innerHTML = '';\
\
    p.images.forEach((src, i) => \{\
      const div = document.createElement('div');\
      div.className = 'detail-thumb' + (i === 0 ? ' active' : '');\
\
      const img = document.createElement('img');\
      img.src     = src;\
      img.alt     = `$\{p.title\} \'97 vista $\{i + 1\}`;\
      img.loading = 'lazy';\
      div.appendChild(img);\
\
      // Al hacer clic en miniatura \uc0\u8594  actualizar imagen principal\
      div.addEventListener('click', () => \{\
        if (mainImg) \{\
          mainImg.src = src;\
          // Efecto de fade suave\
          mainImg.style.opacity = '0';\
          requestAnimationFrame(() => \{\
            mainImg.style.transition = 'opacity 0.25s ease';\
            mainImg.style.opacity = '1';\
          \});\
        \}\
        thumbsEl.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));\
        div.classList.add('active');\
      \});\
\
      thumbsEl.appendChild(div);\
    \});\
  \}\
\
  // Bot\'f3n "\'a1LA QUIERO!" \uc0\u8594  WhatsApp\
  const buyBtn = document.getElementById('detailBuy');\
  if (buyBtn) \{\
    buyBtn.href = 'https://wa.link/sgd8bb';\
    buyBtn.target = '_blank';\
    buyBtn.rel = 'noopener noreferrer';\
  \}\
\
  // Aplicar acento verde Le\'f3n si corresponde\
  const view = document.getElementById('detailView');\
  if (view) \{\
    view.classList.toggle('accent-leon', p.cat === 'Club Le\'f3n');\
    view.classList.add('open');\
    view.scrollTop = 0;\
  \}\
\
  // Bloquear scroll del body\
  document.body.style.overflow = 'hidden';\
\}\
\
/**\
 * Cierra la vista detallada y restaura el scroll.\
 */\
function closeDetail() \{\
  const view = document.getElementById('detailView');\
  if (view) view.classList.remove('open', 'accent-leon');\
  document.body.style.overflow = '';\
\}\
\
/**\
 * Cierra el detalle y hace scroll hasta el Hero/cat\'e1logo.\
 */\
function showCatalog() \{\
  closeDetail();\
  const hero = document.getElementById('heroSection');\
  if (hero) hero.scrollIntoView(\{ behavior: 'smooth' \});\
\}\
\
/* \uc0\u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \
   5. PREVENIR SALTOS DE P\'c1GINA en links "#"\
   \uc0\u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552  */\
document.querySelectorAll('.footer-col a, .category-tabs button').forEach(el => \{\
  if (el.tagName === 'A' && el.getAttribute('href') === '#') \{\
    el.addEventListener('click', e => e.preventDefault());\
  \}\
\});\
\
/* \uc0\u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \
   6. CERRAR DETALLE CON TECLA ESCAPE\
   \uc0\u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552 \u9552  */\
document.addEventListener('keydown', function (e) \{\
  if (e.key === 'Escape') \{\
    const view = document.getElementById('detailView');\
    if (view && view.classList.contains('open')) \{\
      closeDetail();\
    \} else if (menuOpen) \{\
      closeMobileMenu();\
    \}\
  \}\
\});}