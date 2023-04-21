import { useState } from 'react'
import './style.css'

export default function FlexboxPage() {
  const [items, setItems] = useState(3)
  const [style, setStyle] = useState({
    display: 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'nowrap',
    gap: 10
  })

  const handleStyle = (e, f) => {
    setStyle({
      ...style,
      [e.target.name]: f ? f(e.target.value) : e.target.value
    })
  }

  return (
    <div id="flexbox-example">
      <h1>Flex box</h1>

      <form>
        <div>
          <label>Display</label>
          <select
            name="display"
            className="form-control"
            value={style.display}
            onChange={handleStyle}
          >
            <option value="block">Block</option>
            <option value="flex">Flex</option>
          </select>
        </div>

        <div>
          <label>Direction</label>
          <select
            name="flex-direction"
            className="form-control"
            value={style['flex-direction']}
            onChange={handleStyle}
          >
            <option value="row">Row</option>
            <option value="column">Column</option>
          </select>
        </div>

        <div>
          <label>Wrap</label>
          <select
            name="flex-wrap"
            className="form-control"
            value={style['flex-wrap']}
            onChange={handleStyle}
          >
            <option value="nowrap">No</option>
            <option value="wrap">Yes</option>
          </select>
        </div>

        <div>
          <label>Gap</label>
          <input
            name="gap"
            type="number"
            className="form-control"
            value={style.gap}
            onChange={(e) => handleStyle(e, parseInt)}
            min={0}
          />
        </div>

        <div>
          <label>Align</label>
          <select
            name="align-items"
            className="form-control"
            value={style['align-items']}
            onChange={handleStyle}
          >
            <option value="flex-start">Start</option>
            <option value="flex-end">End</option>
            <option value="center">Center</option>
            <option value="stretch">Stretch</option>
          </select>
        </div>

        <div>
          <label>Justify</label>
          <select
            name="justify-content"
            className="form-control"
            value={style['justify-content']}
            onChange={handleStyle}
          >
            <option value="flex-start">Start</option>
            <option value="flex-end">End</option>
            <option value="center">Center</option>
            <option value="space-between">Sp Between</option>
            <option value="space-around">Sp Around</option>
          </select>
        </div>

        <div className="single">
          <label>Itens</label>
          <input
            type="number"
            className="form-control mb-3"
            min={1}
            max={24}
            value={items}
            onChange={(e) =>
              setItems(e.target.value ? parseInt(e.target.value) : 1)
            }
          />
        </div>
      </form>

      <div className="container" style={style}>
        {[...Array(items)].map((i, key) => (
          <div className="item" key={key}></div>
        ))}
      </div>
    </div>
  )
}
