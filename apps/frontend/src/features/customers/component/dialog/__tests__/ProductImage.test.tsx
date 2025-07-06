import { render, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductImage from '../ProductImage'

const SRC = 'https://example.com/image.jpg'
const ALT = '테스트 이미지'

describe('<ProductImage />', () => {
  it('이미지 src와 alt가 올바르게 렌더링된다', () => {
    render(<ProductImage src={SRC} alt={ALT} />)
    const img = screen.getByAltText(ALT) as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toBe(SRC)
    // 초기에는 opacity-0 클래스로 숨김 상태
    expect(img).toHaveClass('opacity-0')
  })

  it('load 이벤트 후 opacity-100 클래스로 전환된다', () => {
    render(<ProductImage src={SRC} alt={ALT} />)
    const img = screen.getByAltText(ALT) as HTMLImageElement
    // load 트리거
    fireEvent.load(img)
    expect(img).toHaveClass('opacity-100')
  })
})
