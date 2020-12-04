<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>link = {
    init:function() {
        const that=this;
        $.getJSON("/links.json",
            function(data){
                that.render(data);
            });
    },
    render:function(data){
        let name,site,info,avatar,li="";
        for(let i=0;i<data.length;i++){ name="data[i].name;" site="data[i].site;" info="data[i].info;" avatar="data[i].avatar;" li+="<div class=&quot;card&quot;>" +'<img="" class="ava" src="'+avatar+'"><div class="card-header"><div><a href="'+site+'" target="_blank">'+name+'</a></div><div class="info">'+info+'</div></div>';
        }
        $(".link-navigation").append(li);
    }
};
link.init();</data.length;i++){><script>
        document.querySelectorAll('.github-emoji')
          .forEach(el => {
            if (!el.dataset.src) { return; }
            const img = document.createElement('img');
            img.style = 'display:none !important;';
            img.src = el.dataset.src;
            img.addEventListener('error', () => {
              img.remove();
              el.style.color = 'inherit';
              el.style.backgroundImage = 'none';
              el.style.background = 'none';
            });
            img.addEventListener('load', () => {
              img.remove();
            });
            document.body.appendChild(img);
          });
      </script>