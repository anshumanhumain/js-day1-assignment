<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Project Management</title>
        <style>

            body {
                  font-family: Arial, sans-serif;
                        margin: 0;
                              padding: 0;
                                  }

                                  header {
                                    background: #333;
                                      color: white;
                                        padding: 10px;
                                          display: flex;
                                            align-items:center;
                                              justify-content: flex-start;
                                              }
                                              header div{
                                                  margin-right: 100px;
                                                  }


                                                  nav a {
                                                    color: white;
                                                      margin: 0 10px;
                                                        text-decoration: underline;
                                                        }

                                                        .container {
                                                          display: flex;
                                                            height: calc(100vh - 80px);
                                                            }

                                                            .column {
                                                              flex: 1;
                                                                padding: 20px;
                                                                  border-right: 1px solid #ccc;
                                                                  }

                                                                  .column:last-child {
                                                                    border-right: none;
                                                                    }

                                                                    .box {
                                                                      background: #f4f4f4;
                                                                        padding: 15px;
                                                                          margin: 10px 0;
                                                                          }
                                                                          .login-box{
                                                                              border: 2px solid black;
                                                                              }

                                                                              .login-box input {
                                                                                display: block;
                                                                                  width: 85%;
                                                                                    padding: 8px;
                                                                                      margin: 10px 0;
                                                                                        
                                                                                        }


                                                                                        .btn {
                                                                                          padding: 8px 12px;
                                                                                            margin-right: 10px;
                                                                                              border: none;
                                                                                                cursor: pointer;
                                                                                                }

                                                                                                .btn-primary {
                                                                                                  background: #28a745;
                                                                                                    color: white;
                                                                                                    }

                                                                                                    .btn-secondary {
                                                                                                      background: #dc3545;
                                                                                                        color: white;
                                                                                                        }
                                                                                                        #left {
                                                                                                          background-color: rgb(0, 255, 183);
                                                                                                          }
                                                                                                          #center{
                                                                                                              background-color: rgb(211, 174, 62);
                                                                                                              }
                                                                                                              #right{
                                                                                                                  background-color: rgb(70, 183, 214);
                                                                                                                  }
                                                                                                                    </style>
                                                                                                                    </head>
                                                                                                                    <body><header>
                                                                                                                      <div><strong>Logo</strong></div>
                                                                                                                         <div><h2>Project Management</h2></div>
                                                                                                                         </header><nav style="background:#555; padding:10px; text-align:center;">
                                                                                                                           <a href="#">Home</a>
                                                                                                                             <a href="#">About</a>
                                                                                                                               <a href="#">Gallery</a>
                                                                                                                                 <a href="#">Contact</a>
                                                                                                                                   <a href="#">Help</a>
                                                                                                                                   </nav><div class="container">
                                                                                                                                     <!-- Left Column -->
                                                                                                                                       <div class="column" id="left">
                                                                                                                                           <h3>History</h3>
                                                                                                                                               <ul>
                                                                                                                                                       <li>History1</li>
                                                                                                                                                               <li>History2</li>
                                                                                                                                                                       <li>History3</li>
                                                                                                                                                                           </ul>
                                                                                                                                                                               <h4>Photos</h4>
                                                                                                                                                                                   <div class="box">Photo 1</div>
                                                                                                                                                                                       <div class="box">Photo 2</div>
                                                                                                                                                                                         </div>  <!-- Middle Column -->  <div class="column" id="center">
                                                                                                                                                                                             <h3>Notice</h3>
                                                                                                                                                                                                 <div class="box">Notice 1</div>
                                                                                                                                                                                                     <div class="box">Notice 2</div>
                                                                                                                                                                                                         <div class="box">Notice 3</div>
                                                                                                                                                                                                           </div>  <!-- Right Column -->  <div class="column"  id="right">
                                                                                                                                                                                                               <h3>Login</h3>
                                                                                                                                                                                                                   <div class="login-box">
                                                                                                                                                                                                                         <label>Username</label>
                                                                                                                                                                                                                               <input type="text" placeholder="Enter username">
                                                                                                                                                                                                                                     <label>Password</label>
                                                                                                                                                                                                                                           <input type="password" placeholder="Enter password">

                                                                                                                                                                                                                                             <button class="btn btn-primary">OK</button>
                                                                                                                                                                                                                                               <button class="btn btn-secondary">Cancel</button>
                                                                                                                                                                                                                                               </div>

                                                                                                                                                                                                                                               <p style="margin-top:15px;">New user?</p>

                                                                                                                                                                                                                                                 </div>
                                                                                                                                                                                                                                                 </div></body>
                                                                                                                                                                                                                                                 </html>
