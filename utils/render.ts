import { createRoot } from 'react-dom/client';

/**
 * @param component The component to render
 */
export function render(component: JSX.Element): void {
    return createRoot(document.body).render(component);
}
