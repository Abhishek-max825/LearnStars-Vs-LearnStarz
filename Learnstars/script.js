document.addEventListener('DOMContentLoaded',()=>{
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(prefersReducedMotion) return;
    // Subtle lift on cards
    document.querySelectorAll('.card').forEach(card=>{
        card.addEventListener('pointerenter',()=>{
            card.animate([
                { transform:'translateY(0)', boxShadow:'0 0 0 rgba(0,0,0,0)' },
                { transform:'translateY(-4px)', boxShadow:'0 8px 18px rgba(0,0,0,.25)' }
            ],{ duration:220, fill:'forwards', easing:'ease-out' });
        });
        card.addEventListener('pointerleave',()=>{
            card.animate([
                { transform:'translateY(-4px)', boxShadow:'0 8px 18px rgba(0,0,0,.25)' },
                { transform:'translateY(0)', boxShadow:'0 0 0 rgba(0,0,0,0)' }
            ],{ duration:220, fill:'forwards', easing:'ease-out' });
        });
    });
    const backBtn = document.querySelector('.back-to-top');
    if(backBtn){
        const onScroll = ()=>{
            if(window.scrollY > 300){ backBtn.classList.add('show'); } else { backBtn.classList.remove('show'); }
        };
        window.addEventListener('scroll', onScroll, { passive:true });
        backBtn.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));
        onScroll();
    }
});


