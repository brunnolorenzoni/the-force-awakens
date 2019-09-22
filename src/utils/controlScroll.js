export const preventDefault = (e) =>
{
    if (e.target.tagName.toLowerCase() == 'body') {
        e.preventDefault();
    }
}

export const enableScroll = () => 
{
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
    document.body.classList.remove("no-scroll");
}

export const disableScroll = () =>
{
    document.body.removeEventListener('touchmove', preventDefault, { passive: false });
    document.body.classList.add("no-scroll");
}


