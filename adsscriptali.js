            (function (d, w, p, q, i) {
              var s = d.createElement('script');
              var f = q.replace('#', '');
              s.src = '//' + p + '/s?d=' + i + '&f=' + f + '&r=' + new Date().getTime();
              s.onload = function () {
                typeof w[f] === 'function' && w[f](p, q, d, i)
              };
              d.body.appendChild(s);
            })(document, window, 'ali-crm.ru', '#ali-banner', 825);