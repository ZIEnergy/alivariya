<?php
   header('Content-type: text/html; charset=utf-8');

   if(!empty($_POST["data"]))
   {
      $time = !empty($_POST['data']["time"]) ? $_POST['data']["time"] : '';
      $time = strtolower(trim(strip_tags(stripcslashes($time))));

      $servername = "localhost";
      $username = "u224086359_cs303";
      $password = "cs30302_kalyadna";
      $dbname = "u224086359_cs303";

      $conn = new mysqli($servername, $username, $password, $dbname);

      $conn->set_charset("utf8");
      // Check connection
      if ($conn->connect_error) {
          $data = array('success' => false, 'error' => true, 'message' => 'Что-то пошло не так! Попробуйте еще раз!');
          echo json_encode($data);
          return true;
      }

      $code = substr(md5(uniqid('user', true)), 0, 8);

      $sql = "INSERT INTO users_time (usertime, code, regdate) VALUES ('" . $time . "', '" . $code . "', NOW())";

      if ($conn->query($sql) === TRUE){

         $sql = "SELECT * FROM users_time ORDER BY usertime ASC";
         $result = $conn->query($sql);

         if ($result->num_rows > 0) 
         {
            $i = 1;
           while ($row = $result->fetch_assoc()) {
               if($row['code'] == $code){
                  break;
               }

               $i++;
            }

            $data = array('success' => true, 'error' => false, 'message' => $result->num_rows);
            echo json_encode($data);
            return true;
         }else{
            $data = array('success' => false, 'error' => true, 'message' => '1');
            echo json_encode($data);
            return true;
         }
      } else {
         $data = array('success' => false, 'error' => true, 'message' => '2');
         echo json_encode($data);
         return true;
      }

      $conn->close();
   }
?>