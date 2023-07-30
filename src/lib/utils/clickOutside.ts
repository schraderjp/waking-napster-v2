/** Dispatch event on click outside of node */
export function clickOutside(node: HTMLElement) {
  
    const handleClick = (event: CustomEvent<MouseEvent>) => {
        if (!event.target) return;
      if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
        node.dispatchEvent(
          new CustomEvent('click_outside')
        )
      }
    }
  
      document.addEventListener('click', handleClick as EventListenerOrEventListenerObject, true);
    
    return {
      destroy() {
        document.removeEventListener('click', handleClick as EventListenerOrEventListenerObject, true);
      }
      }
  }