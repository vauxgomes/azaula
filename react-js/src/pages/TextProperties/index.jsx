import './style.css'

import { useState } from 'react'

import TopBar from '../../components/TopBar'

export default function TextProperties() {
  const [text, setText] = useState('')
  const [style, setStyle] = useState({
    color: '#28af86',
    textIndent: '0px',
    letterSpacing: '0px',
    lineHeight: '20px',
    wordSpacing: '10px',
    position: 'sticky',
    top: 0,
    background: '#fff'
  })

  const handleStyle = (e, f) => {
    setStyle({
      ...style,
      [e.target.name]: f ? f(e.target.value) : e.target.value
    })
  }

  const handleStylePX = (e) => {
    handleStyle({
      target: {
        name: e.target.name,
        value: e.target.value + 'px'
      }
    })
  }

  return (
    <>
      <TopBar />

      <div id="text-properties-example">
        <h1>Propriedade de texto</h1>
        <hr />

        <h2 style={style}>
          {text ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, minima temporibus, quos excepturi ea voluptatem incidunt ipsum libero sequi labore, voluptate itaque consequatur? Beatae voluptatum laboriosam aperiam facilis doloremque tempora.'}
        </h2>

        <form>
          <label>Texto</label>
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <label>
            Cor <code>(color)</code>
          </label>
          <input
            name="color"
            type="color"
            className="form-control"
            value={style.color}
            onChange={handleStyle}
          />

          <label>
            Alinhamento <code>(text-alignment)</code>
          </label>
          <select
            name="textAlign"
            className="form-control"
            value={style['textAlign']}
            onChange={handleStyle}
          >
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="center">Center</option>
            <option value="justify">Justify</option>
          </select>

          <label>
            Decoração <code>(text-decoration)</code>
          </label>
          <TextDecoration style={style} handleStyle={handleStyle} />

          <label>
            Transformação <code>(text-transform)</code>
          </label>
          <select
            name="textTransform"
            className="form-control"
            value={style['textTransform']}
            onChange={handleStyle}
          >
            <option value="none">None</option>
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
            <option value="capitalize">Capitalize</option>
          </select>

          <label>
            <code>Identação (text-indent)</code>
          </label>
          <input
            type="range"
            name="textIndent"
            className="form-control"
            value={style['textIndent']?.replace('px', '')}
            onChange={handleStylePX}
            min={-20}
            max={50}
          />

          <label>
            <code>Espaçamento Letras (letter-spacing)</code>
          </label>
          <input
            type="range"
            name="letterSpacing"
            className="form-control"
            value={style['letterSpacing']?.replace('px', '')}
            onChange={handleStylePX}
            min={-20}
            max={50}
          />

          <label>
            <code>Altura da Linha (line-height)</code>
          </label>
          <input
            type="range"
            name="lineHeight"
            className="form-control"
            value={style['lineHeight']?.replace('px', '')}
            onChange={handleStylePX}
            min={-20}
            max={50}
          />

          <label>
            <code>Espaçamento das Palavras (word-spacing)</code>
          </label>
          <input
            type="range"
            name="wordSpacing"
            className="form-control"
            value={style['wordSpacing']?.replace('px', '')}
            onChange={handleStylePX}
            min={-20}
            max={50}
          />
        </form>

        <pre style={{ fontSize: 20 }}>
          {JSON.stringify(style)
            .replace('{', '{\n  ')
            .replace('}', ';\n}')
            .replaceAll(',', ';\n  ')
            .replaceAll('"', '')
            .replaceAll(':', ': ')
            .replace('textAlign', 'text-align')
            .replace('textDecoration', 'text-decoration')
            .replace('textTransform', 'text-transform')
            .replace('letterSpacing', 'letter-space')
            .replace('wordSpacing', 'word-spacing')
            .replace('lineHeight', 'line-height')
            .replace('textIndent', 'text-indent')}
        </pre>
      </div>
    </>
  )
}

function TextDecoration({ style, handleStyle }) {
  const [line, setLine] = useState('none')
  const [style_, setStyle] = useState('none')
  const [color, setColor] = useState('black')

  const handleChange = (e) => {
    let l = line
    let s = style_

    if (e.target.name == 'line') {
      setLine(e.target.value)
      l = e.target.value
    } else if (e.target.name == 'style') {
      setStyle(e.target.value)
      s = e.target.value
    }

    handleStyle({
      target: { name: 'textDecoration', value: `3px ${l} ${s} ${color}` }
    })
  }

  return (
    <div>
      <select
        name="line"
        className="form-control"
        value={line}
        onChange={(e) => handleChange(e)}
      >
        <option value="none">None</option>
        <option value="underline">Underline</option>
        <option value="overline">Overline</option>
        <option value="line-through">Linethrough</option>
        <option value="blink">Blink</option>
      </select>

      <select
        name="style"
        className="form-control"
        value={style_}
        onChange={(e) => handleChange(e)}
      >
        <option value="none">None</option>
        <option value="solid">Solid</option>
        <option value="dotted">Dotted</option>
        <option value="dashed">Dashed</option>
        <option value="double">Double</option>
        <option value="wavy">Wavy</option>
      </select>
    </div>
  )
}
