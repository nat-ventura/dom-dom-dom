var body = document.querySelector('body');
// looks for stuff in the dom that matches this
// stuff as in collections-- classes-- things with tags
// be careful with above, because can sometimes give you things
// that you're not expecting
var theContainer = document.querySelectorAll('.container');
// you do not want your behavior and (... idk.. stylings?)
// to be locked together

// avoid this mysterious thing by using data attributes!

<a href="otter.jpg" data-target="trigger">Otter me bro</a>
<div class="container" data-target="top-level-container">
    {/*stuff here  */}
</div>