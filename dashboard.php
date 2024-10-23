<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Wellness Wave</title>

    <!-- Custom fonts and styles -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400&display=swap" rel="stylesheet">
    <link href="static/css/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="static/css/newCss.css" rel="stylesheet">
    <link rel="stylesheet" href="static/css/WellnessWave.css">
    <link rel="stylesheet" href="static/css/Bmistyle.css" />
    <link rel="shortcut icon" type="image/icon" href="static/img/png-transparent-red-heart-with-beat-illustration-heart-electrocardiography-pulse-heartbeat-cartoon-love-cartoon-character-other-removebg-preview.png"/>

</head>

<body id="page-top">
<div id="wrapper">

    <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
            <nav class="navbar navbar-expand navbar-light bg-gray-900 topbar mb-4 static-top shadow">
                <div class="MAlinda">
                    <button class="btn-primary incline">
                        <a href="http://127.0.0.1:5000" class="text-light">
                            <i class="fa fa-hourglass-2"></i> Prediction
                        </a>
                    </button>
                    <div class="snap">
                        <button id="snapshotButton" class="incline">
                            <i class="fa fa-download"></i> Download Workout
                        </button>
                    </div>
                </div>
                <div class="sidebar-brand-icon rotate-n-0">
                    <div class="all">
                    <div class="well">
                        <i class="fas fa-fw fa fa-heartbeat fa-3x icon-red" style="color: red"></i>
                        <div class="sidebar-brand-text mx-2 wellness fa-2x text-light incline">Wellness Wave</div>
                    </div>
                    <div class="feedback">
                        <button class="btn-warning incline" id="feed">
                            <a href="feedback.php" class="text-light">
                                <i class="fa fa-comments-o"></i> Feedback
                            </a>
                        </button>
                        <a href="#" data-toggle="modal" data-target="#logoutModal">
                            <button id="Logout" class="btn-danger text-light incline">
                                <i class="fa fa-power-off"></i> Logout
                            </button>
                        </a>
                    </div>
                </div>
             </nav>


            <div class="container-fluid form" >
                <div class="container bg-gray-900 form-group">
                    <form id="calculator-form form-group">
                        <label for="age" class="text-light">Age:</label>
                        <input type="number" id="age" name="age" required>

                        <label for="height"  class="text-light">Height (cm):</label>
                        <input type="number" id="height" name="height" required>

                        <label for="weight"  class="text-light">Weight (kg):</label>
                        <input type="number" id="weight" name="weight" required>

                        <label for="gender"  class="text-light">Gender:</label>
                        <div class="radio-buttons">
                            <input type="radio" id="male" name="gender" value="male" required>
                            <label for="male"  class="text-light">Male</label>
                            <input type="radio" id="female" name="gender" value="female">
                            <label for="female"  class="text-light">Female</label>
                        </div>

                        <div class="buttons">
                            <button type="button" onclick="calculate()">Submit</button>
                            <button type="reset" onclick="resetForm()">Reset</button>
                        </div>
                    </form>
                    <div id="results">
                        <div class="bmr bg-primary">
                        <p id="bmi-result"  class="text-light" style="font-weight: bold;font-size: 20px;">BMI:</p>
                        <p id="bmr-result"  class="text-light" style="font-weight: bold;font-size: 20px">Basic Calorie:</p>
                        </div>
                        <div class=" bmrs bg-primary">
                        <p id="calories-result"  class="text-light" style="font-weight: bold;font-size: 20px">Target Calorie:</p>
                        <p id="carbs-result"  class="text-light" style="font-weight: bold;font-size: 20px">Carbs:</p>
                        <p id="protein-result"  class="text-light" style="font-weight: bold;font-size: 20px">Protein:</p>
                        <p id="fats-result"  class="text-light" style="font-weight: bold;font-size: 20px">Fats:</p>
                        </div>



                    </div>
                </div>
                <div class=" Workout-plan bg-gray-900" >
                    <h3 class="work text-light font-weight-bold">Workout Plan (Only 4 months)</h3>

                    <table class="table ">
                        <thead >
                        <tr >
                            <th scope="col">#</th>
                            <th scope="col">Exercise</th>
                            <th scope="col">Reps</th>
                            <th scope="col">Sets</th>
                        </tr>
                        </thead>
                        <tbody id="workout-table">

                        <tr data-toggle="collapse" data-target="#collapse1" class="clickable">
                            <th scope="col">1</th>
                            <td id="exercise-1"></td>
                            <td id="reps-1"></td>
                            <td id="sets-1"></td>
                        </tr>
                        <tr id="collapse1" class="collapse">
                            <td colspan="4" class="bg-white">
                            <div class="toys" id="toy-1"><div class="console"><div class="imagediv"><img id ="img-1" class="img"></div><div id ="details" class="details"><div class="para"></div><div id="para-1-1" class="para-1"></div><div id="para-1-2" class="para-2"></div><div id="para-1-3" class="para-3"></div> </div></div> </div></td></tr>
                        <tr data-toggle="collapse" data-target="#collapse2" class="clickable">
                            <th scope="col">2</th>
                            <td id="exercise-2"></td>
                            <td id="reps-2"></td>
                            <td id="sets-2"></td>
                        </tr>
                        <tr id="collapse2" class="collapse">
                            <td colspan="4" class="bg-white">
                                <div class="toys" id="toy-2">
                                    <div class="console"><div class="imagediv" id="imagediv" ><img id ="img-2" class="img"></div><div id ="details-1" class="details"><div class="para"></div><div id="para-2-1" class="para-1"></div><div id="para-2-2" class="para-2"></div><div id="para-2-3" class="para-3"></div></div></div>

                                </div>
                            </td></tr>
                        <tr data-toggle="collapse" data-target="#collapse3" class="clickable">
                            <th scope="col">3</th>
                            <td id="exercise-3"></td>
                            <td id="reps-3"></td>
                            <td id="sets-3"></td>
                        </tr>
                        <tr id="collapse3" class="collapse">
                            <td colspan="4" class="bg-white">
                                <div class="toys" id="toy-3">
                                    <div class="console"><div class="imagediv"><img id ="img-3" class="img"></div><div id ="details-3" class="details"><div class="para"></div><div id="para-3-1" class="para-1"></div><div id="para-3-2" class="para-2"></div><div id="para-3-3" class="para-3"></div></div></div>
                                </div>
                            </td></tr>
                        <tr data-toggle="collapse" data-target="#collapse4" class="clickable">
                            <th scope="col">4</th>
                            <td id="exercise-4"></td>
                            <td id="reps-4"></td>
                            <td id="sets-4"></td>
                        </tr>
                        <tr id="collapse4" class="collapse">
                            <td colspan="4" class="bg-white">
                                <div class="toys" id="toy-4">
                                    <div class="console"><div class="imagediv"><img id ="img-4" class="img"></div><div id ="details-4" class="details"><div class="para"></div><div id="para-4-1" class="para-1"></div><div id="para-4-2" class="para-2"></div><div id="para-4-3" class="para-3"></div></div></div>
                                </div>
                            </td></tr>
                        <tr data-toggle="collapse" data-target="#collapse5" class="clickable">
                            <th scope="col">5</th>
                            <td id="exercise-5"></td>
                            <td id="reps-5"></td>
                            <td id="sets-5"></td>
                        </tr>
                        <tr id="collapse5" class="collapse">
                            <td colspan="4" class="bg-white">
                                <div class="toys" id="toy-5">
                                    <div class="console"><div class="imagediv"><img id ="img-5" class="img"></div><div id ="details-5" class="details"><div class="para"></div><div id="para-5-1" class="para-1"></div><div id="para-5-2" class="para-2"></div><div id="para-5-3" class="para-3"></div></div></div>
                                </div></td></tr>
                        <tr data-toggle="collapse" data-target="#collapse6" class="clickable">
                            <th scope="col">6</th>
                            <td id="exercise-6"></td>
                            <td id="reps-6"></td>
                            <td id="sets-6"></td>
                        </tr>
                        <tr id="collapse6" class="collapse">
                            <td colspan="4" class="bg-white">
                                <div class="toys" id="toy-6">
                                    <div class="console"><div class="imagediv"><img id ="img-6" class="img"></div><div id ="details-6" class="details"><div class="para"></div><div id="para-6-1" class="para-1"></div><div id="para-6-2" class="para-2"></div><div id="para-6-3" class="para-3"></div></div></div>
                                </div></td></tr>
                        <tr data-toggle="collapse" data-target="#collapse7" class="clickable">
                            <th scope="col">7</th>
                            <td id="exercise-7"></td>
                            <td id="reps-7"></td>
                            <td id="sets-7"></td>
                        </tr>
                        <tr id="collapse7" class="collapse">
                            <td colspan="4" class="bg-white">
                                <div class="toys" id="toy-7">
                                    <div class="console"><div class="imagediv"><img id ="img-7" class="img"></div><div id ="details-7" class="details"><div class="para"></div><div id="para-7-1" class="para-1"></div><div id="para-7-2" class="para-2"></div><div id="para-7-3" class="para-3"></div></div></div>

                                </div></td></tr>
                        <tr data-toggle="collapse" data-target="#collapse8" class="clickable">
                            <th scope="col">8</th>
                            <td id="exercise-8"></td>
                            <td id="reps-8"></td>
                            <td id="sets-8"></td>
                        </tr>
                        <tr id="collapse8" class="collapse">
                            <td colspan="4" class="bg-white">
                                <div class="toys" id="toy-8">
                                    <div class="console"><div class="imagediv"><img id ="img-8" class="img"></div><div id ="details-8" class="details"><div class="para"></div><div id="para-8-1" class="para-1"></div><div id="para-8-2" class="para-2"></div><div id="para-8-3" class="para-3"></div></div></div>
                                </div></td></tr>
                        <tr data-toggle="collapse" data-target="#collapse9" class="clickable">
                            <th scope="col">9</th>
                            <td id="exercise-9"></td>
                            <td id="reps-9"></td>
                            <td id="sets-9"></td>
                        </tr>
                        <tr id="collapse9" class="collapse">
                            <td colspan="4" class="bg-white">
                                <div class="toys" id="toy-9">
                                    <div class="console"><div class="imagediv"><img id ="img-9" class="img"></div><div id ="details-9" class="details"><div class="para"></div><div id="para-9-1" class="para-1"></div><div id="para-9-2" class="para-2"></div><div id="para-9-3" class="para-3"></div></div></div>
                                </div></td></tr>
                        <tr data-toggle="collapse" data-target="#collapse10" class="clickable">
                            <th scope="col">10</th>
                            <td id="exercise-10"></td>
                            <td id="reps-10"></td>
                            <td id="sets-10"></td>
                        </tr>
                        <tr id="collapse10" class="collapse">
                            <td colspan="4" class="bg-white">
                                <div class="toys" id="toy-10">
                                    <div class="console"><div class="imagediv"><img id ="img-10" class="img"></div><div id ="details-10" class="details"><div class="para"></div><div id="para-10-1" class="para-1"></div><div id="para-10-2" class="para-2"></div><div id="para-10-3" class="para-3"></div></div></div>
                                </div></td></tr>
                        <tr data-toggle="collapse" data-target="#collapse11" class="clickable">
                            <th scope="col">11</th>
                            <td id="exercise-11"></td>
                            <td id="reps-11"></td>
                            <td id="sets-11"></td>
                        </tr>
                        <tr id="collapse11" class="collapse">
                            <td colspan="4" class="bg-white">
                                <div class="toys" id="toy-11">
                                    <div class="console"><div class="imagediv"><img id ="img-11" class="img"></div><div id ="details-11" class="details"><div class="para"></div><div id="para-11-1" class="para-1"></div><div id="para-11-2" class="para-2"></div><div id="para-11-3" class="para-3"></div></div></div>
                                </div></td></tr>
                        <tr data-toggle="collapse" data-target="#collapse12" class="clickable">
                            <th scope="col">12</th>
                            <td id="exercise-12"></td>
                            <td id="reps-12"></td>
                            <td id="sets-12"></td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <div class="rowbox">
            <div class="boxes">
            <div class="col-xl-4 col-lg-5 csh" >
                <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div class="card-header py-3 bg-gray-900">
                        <h6 class="m-0 font-weight-bold text-light">Nutrition Chart (g)</h6>
                    </div>
                    <!-- Card Body -->
                    <div class="card-body bg-gray-900" style="height:75vh;padding: 40px!important;" >
                        <div class="chart-pie pt-10">
                            <canvas id="myPieChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

                <div class="nutri bg-gray-900">
                    <h3 class="nutrition text-light font-weight-bold" style="margin-right: -30px;text-align: center">Nutrition-Chart</h3>
                    <table class="table">
                        <thead >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Meals Name</th>
                            <th scope="col">Meals Amount(Cooked)</th>
                        </tr>
                        </thead>
                        <tbody id="Nutrition-plan">
                        <tr data-toggle="collapse" data-target="#collapse-1" class="clickable">
                            <th scope="col">1</th>
                            <td id="Name-1" ></td>
                            <td id="Carbs-1"></td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapse-2" class="clickable">
                            <th scope="col">2</th>
                            <td id="Name-2" ></td>
                            <td id="Carbs-2"></td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapse-3" class="clickable">
                            <th scope="col">3</th>
                            <td id="Name-3" ></td>
                            <td id="Carbs-3"></td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapse-4" class="clickable">
                            <th scope="col">4</th>
                            <td id="Name-4" ></td>
                            <td id="Carbs-4"></td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapse-5" class="clickable">
                            <th scope="col">5</th>
                            <td id="Name-5" ></td>
                            <td id="Carbs-5"></td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapse-6" class="clickable">
                            <th scope="col">6</th>
                            <td id="Name-6" ></td>
                            <td id="Carbs-6"></td>

                        </tr>

                        <tr data-toggle="collapse" data-target="#collapse-7" class="clickable" >
                            <th scope="col">7</th>
                            <td id="Name-7" ></td>
                            <td id="Carbs-7"></td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>

<a class="scroll-to-top rounded" href="#page-top">
    <i class="fa fa-angle-up"></i>
</a>

<!-- Logout Modal-->
<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button class="close " type="button" data-dismiss="modal" aria-label="Close" style="background-color: initial!important;color: initial !important; width: 50px !important; height: 10px !important;" >
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal" style="width: 100px!important;">Cancel</button>
                <a class="btn btn-primary" href="index.php">Logout</a>
            </div>
        </div>
    </div>
</div>
<!-- Bootstrap and core scripts -->
 
<script src="static/vendor/jquery/jquery.min.js"></script>
<script src="static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="static/vendor/jquery-easing/jquery.easing.min.js"></script>
<script src="static/js/WellnessWave.js"></script>
<script src="static/vendor/chart.js/Chart.min.js"></script>
<script src="static/js/Bmiscript.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
<script>
    $(document).ready(function(){
        $('.clickable').click(function(){
            $(this).next('.collapse').toggle();
        });
    });</script>
<script>
    document.getElementById('snapshotButton').addEventListener('click', function() {
        html2canvas(document.body, {
            onrendered: function(canvas) {
                // Convert the canvas to an image
                var img = canvas.toDataURL('image/png');
                // Create a new link element
                var link = document.createElement('a');
                // Set the download attribute with a filename
                link.download = 'snapshot.png';
                // Set the href to the image data URL
                link.href = img;
                // Simulate a click on the link to trigger the download
                link.click();
            }
        });
    });
</script>
</body>

</html>
