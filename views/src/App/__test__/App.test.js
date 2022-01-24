import { render, screen } from '@testing-library/react'

import App from "../App"

describe('Layout', () => {
    it("Should render Sign Up Header", () => {
        render(<App />);

        const AppHeader = screen.getByRole('heading', { level: 1, name: /App Testing Library/i })

        expect(AppHeader).toBeInTheDocument()
    })
});
