const rand = ( min, max ) =>
  ( undefined == max )
  ? ( Math.random() * min )
  : ( Math.random() * (max - min) + min )


const starCount = 2400
    , maxRaduis = 500

let canvas = document.querySelector('canvas')
  , starGroup
  , stars = [ ]

ill = new Zdog.Illustration
  ({ element: canvas
   , dragRotate: true
   })

starGroup = new Zdog.Group({ addTo: ill })

for( let i = 1; i < starCount; i++ )
  { const R = rand( maxRaduis )
        , F = rand( 2 * Math.PI )
        , T = rand( Math.PI )
        , x = R * Math.sin( F ) * Math.cos( T )
        , y = R * Math.sin( F ) * Math.sin( T )
        , z = R * Math.cos( F )
        , stroke = ( maxRaduis - R ) / 25 + 5
        , Hue = R * 360 / maxRaduis - 60
        , color = `hsl(${Hue}, 100%, 50%)`

    stars.push({ shape: new Zdog.Shape(
      { addTo: starGroup
      , translate: { x, y, z }
      , stroke
      , color
      })
    })
  }


const animate = ( ) =>
  { starGroup.rotate.y += 0.001
    starGroup.rotate.x -= 0.001
    starGroup.rotate.z -= 0.001

    ill.updateRenderGraph( )
    window.requestAnimationFrame( animate )
  }
animate( )
