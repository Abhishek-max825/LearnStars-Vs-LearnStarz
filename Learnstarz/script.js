document.addEventListener('DOMContentLoaded',()=>{
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Card reveal (respect reduced motion)
    if(!prefersReducedMotion){
        const cards = document.querySelectorAll('.card');
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(e=>{
                if(e.isIntersecting){
                    e.target.animate([
                        { transform:'translateY(12px)', opacity:.2 },
                        { transform:'translateY(0)', opacity:1 }
                    ],{ duration:500, easing:'ease-out', fill:'forwards' });
                    observer.unobserve(e.target);
                }
            });
        },{ threshold:.15 });
        cards.forEach(c=>observer.observe(c));
    }
    const backBtn = document.querySelector('.back-to-top');
    if(backBtn){
        const onScroll = ()=>{
            if(window.scrollY > 300){ backBtn.classList.add('show'); } else { backBtn.classList.remove('show'); }
        };
        window.addEventListener('scroll', onScroll, { passive:true });
        backBtn.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));
        onScroll();
    }

    // Synopsis toggle
    const toggle = document.querySelector('.synopsis-toggle');
    const synopsis = document.querySelector('.synopsis');
    if(toggle && synopsis){
        toggle.addEventListener('click', ()=>{
            const isCollapsed = synopsis.getAttribute('data-collapsed') !== 'false';
            synopsis.setAttribute('data-collapsed', String(!isCollapsed));
            toggle.setAttribute('aria-expanded', String(isCollapsed));
            toggle.textContent = isCollapsed ? 'Show less' : 'Read more';
        });
    }

    // Tabs
    const tabContainer = document.querySelector('[data-tabs]');
    if(tabContainer){
        const tabs = tabContainer.querySelectorAll('[role="tab"]');
        const panels = {
            overview: document.getElementById('panel-overview'),
            cast: document.getElementById('panel-cast'),
            reviews: document.getElementById('panel-reviews'),
            stills: document.getElementById('panel-stills')
        };
        tabs.forEach(tab=>{
            tab.addEventListener('click', ()=>{
                tabs.forEach(t=>t.setAttribute('aria-selected','false'));
                tab.setAttribute('aria-selected','true');
                Object.values(panels).forEach(p=>{ if(p){ p.hidden = true; p.classList.remove('is-active'); }});
                const id = tab.getAttribute('data-tab');
                const panel = panels[id];
                if(panel){ panel.hidden = false; panel.classList.add('is-active'); panel.focus(); }
            });
        });
    }
});


