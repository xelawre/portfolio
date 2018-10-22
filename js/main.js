var inactivityTime = function() {

    var t;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onmousedown = resetTimer;
    document.ontouchstart = resetTimer;
    document.onclick = resetTimer;
    document.onscroll = resetTimer;
    document.onkeypress = resetTimer;

    function showArrow() {
      document.getElementsByClassName('arrow')[0].style.visibility = 'visible';
    }

    function resetTimer() {
        document.getElementsByClassName('arrow')[0].style.visibility = 'hidden';
        clearTimeout(t);
        t = setTimeout(showArrow, 5000)
    }
};

inactivityTime();
