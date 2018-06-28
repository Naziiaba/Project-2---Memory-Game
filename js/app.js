<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Matching Game</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet prefetch" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
  <link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Coda">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="css/app.css">
  <link rel="stylesheet" href="css/responsive.css">
</head>
<body>

    <div class="container">
        <header>
            <h1>Matching Game</h1>
        </header>

        <section class="score-panel">
            <ul class="stars">
                <li>
                    <i class="fa fa-star"></i>
                </li>
                <li>
                    <i class="fa fa-star"></i>
                </li>
                <li>
                    <i class="fa fa-star"></i>
                </li>
            </ul>

        	<span class="moves">0</span> Moves

          <div class="timer">00:00</div>

          <div class="restart">
              <i class="material-icons">rotate_right</i>
        	</div>
        </section>

        <ul class="deck">
            <li class="card">
                <i class="fa fa-diamond"></i>
            </li>
            <li class="card">
                <i class="fa fa-paper-plane-o"></i>
            </li>
            <li class="card match">
                <i class="fa fa-anchor"></i>
            </li>
            <li class="card">
                <i class="fa fa-bolt"></i>
            </li>
            <li class="card">
                <i class="fa fa-cube"></i>
            </li>
            <li class="card match">
                <i class="fa fa-anchor"></i>
            </li>
            <li class="card">
                <i class="fa fa-leaf"></i>
            </li>
            <li class="card">
                <i class="fa fa-bicycle"></i>
            </li>
            <li class="card">
                <i class="fa fa-diamond"></i>
            </li>
            <li class="card">
                <i class="fa fa-bomb"></i>
            </li>
            <li class="card">
                <i class="fa fa-leaf"></i>
            </li>
            <li class="card">
                <i class="fa fa-bomb"></i>
            </li>
            <li class="card open show">
                <i class="fa fa-bolt"></i>
            </li>
            <li class="card">
                <i class="fa fa-bicycle"></i>
            </li>
            <li class="card">
                <i class="fa fa-paper-plane-o"></i>
            </li>
            <li class="card">
                <i class="fa fa-cube"></i>
            </li>
        </ul>
    </div>

    <!-- Congratulations Popup -->

    <div class="win-popup-bg"></div>


           <div class="win-popup">
               <div class="congratulations">
                   <h1>Awesome!!!</h1>
                   <table>
                       <tr>
                           <td class="left">
                               <h2>Your did it in: </h2>
                           </td>
                           <td>
                               <h2 id="score-moves"></h2>
                           </td>
                       </tr>
                       <tr>
                           <td class="left">
                               <h2>Your time: </h2>
                           </td>
                           <td>
                               <h2 id="score-time"></h2>
                           </td>
                       </tr>
                       <tr>
                           <td class="left">
                               <h2>Your stars: </h2>
                           </td>
                           <td>
                               <h2 id="score-stars"></h2>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <div class="restart">
                                   <i class="material-icons">rotate_right</i>

                               </div>
                               <!-- <div class="leader-board-icon">
                                   <i class="material-icons">assignment</i>
                               </div> -->
                           </td>
                   </table>
               </div>

           </div>

           <!-- Name Panel -->

           <div class="name-panel">
               <table>
                   <tr>
                       <td>
                           <h1>Your score is:</h1>
                       </td>
                       <td>
                           <h1 class="score-value"></h1>
                       </td>
                   </tr>
               </table>
               <input type="text" id="uname" name="name" placeholder="Type Your name">
               <div class="buttonOk">
                   <h1>SUBMIT</h1>
               </div>

           </div>

           <!-- Leader Board -->

           <div class="leader-board">
               <h1>TOP SCORES</h1>
               <table>
                   <tr>
                       <th class="name">Name</th>
                       <th class="score">Score</th>
                       <th class="time">Time</th>
                       <th class="move">Moves</th>
                   </tr>
               </table>
               <div class="restart">
                   <i class="material-icons">rotate_right</i>
               </div>
           </div>

           <div class="leader-board-text">
               <h4>Leader Board</h4>
           </div>
       </div>



    <script src="js/app.js"></script>
</body>
</html>
