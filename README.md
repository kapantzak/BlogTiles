# BlogTiles

A Bootstrap Template that uses tiles to display your blog posts.

##Dependencies##

This template uses jsTiles ( [http://kapantzak.github.io/jstiles/](http://kapantzak.github.io/jstiles/ "jsTiles") ), another jQuery/Bootstrap plugin that creates the tiles. So, you have to include it in order to use this template.

These are the resources you have to include:


- Bootstrap ( [http://getbootstrap.com/](http://getbootstrap.com/ "Bootstrap") )
- jQuery ( [https://jquery.com/](https://jquery.com/ "jQuery") )
- jsTiles ( [http://kapantzak.github.io/jstiles/](http://kapantzak.github.io/jstiles/ "jsTiles") ) 

##How to create a post##

All you have to do is to provide a path for the post image. In the `index.html` file find an element with class `tl-page`. Each of these elements holds a number of tiles that represent the posts of your blog. 

This is how a typical posts page would be:

    <div class="tl-page" data-tl-template="tempBlog">

        <div data-bt-bg="path/to/post_image.jpg">
           <a href="path/to/post_file.html">
              <!-- Post content -->
           </a>
        </div>	

        <div data-bt-bg="path/to/post_image.jpg">
           <a href="path/to/post_file.html">
              <!-- Post content -->
           </a>
        </div>

        <!-- Place some other posts here... -->

    </div>

- You have to provide a template for the page ( `data-tl-template` )
- You have to provide an image path to each tile ( `data-bt-bg` )

For more information about the structure of the tiles page, visit [jsTiles](http://kapantzak.github.io/jstiles/) page.

##Ajax load##

You also have the ability to load more articles when the user scrolls down to the last line of tiles. At this time, the template just shows up the already loaded posts (doesn't perform any ajax call).

You can find the `loadOnScroll()` function inside `scripts/scripts.js` file to see how the template loads the next post on scroll. Feel free to change this feature in order to perform an ajax call to load the next set of posts.

Just change the part of code inside the first `if` statement, and perform an ajax call in order to load the next set of tiles:

    var loadOnScroll = function() {
		var win = $(window);
		var cont = $('#content');
		var contH = cont.outerHeight();
		var winH = win.height();
		var offsetBottom = 0;
		var lim = winH - offsetBottom;
		var contentBottom = cont.offset().top - parseFloat(win.scrollTop()) + contH;
		if (contentBottom < lim) {
			topPos('absolute');

			// Place here the ajax call
            $.get('yourPage.php', function(data) {
				if (data && data != '') {
					//Build the tiles structure and initialize jsTiles()
				} else {
					alert('No more posts!');
				}
			});

		} else {
			topPos('fixed');
		}	
    }