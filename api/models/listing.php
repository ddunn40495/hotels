<?php
$dbconn = pg_connect("host=localhost port=5432 dbname=rentaldb user=postgres password=braves1995");



// $dbconn = null;
// if(getenv(‘DATABASE_URL’)){
// 	$connectionConfig = parse_url(getenv(‘DATABASE_URL’));
// 	$host = $connectionConfig[‘host’];
// 	$user = $connectionConfig[‘user’];
// 	$password = $connectionConfig[‘pass’];
// 	$port = $connectionConfig[‘port’];
// 	$dbname = trim($connectionConfig[‘path’],‘/’);
// 	$dbconn = pg_connect(
// 		“host=“.$host.” “.
// 		“user=“.$user.” “.
// 		“password=“.$password.” “.
// 		“port=“.$port.” “.
// 		“dbname=“.$dbname
// 	);
// } else {
// 	$dbconn = pg_connect(“host=localhost dbname=reviews”);
// }


class Listing {
    public $id;
    public $address;
    public $city;
    public $state;
    public $zip;
    public $rent;
    public $pic;
    public $available;
    public $category;

    public function __construct($id, $address, $city, $state, $zip, $rent, $pic, $available, $category) {
        $this->id  = $id;
        $this->address = $address;
        $this->address = $city;
        $this->address = $state;
        $this->address = $zip;
        $this->rent = $rent;
        $this->pic = $pic;
        $this->available = $available;
        $this->category = $category;




    }
}

class Listings {

    static function delete($id){
        $query = "DELETE FROM listings WHERE id = $1";
        $query_params = array($id);
        pg_query_params($query, $query_params);
        return self::all();
    }

    static function update($updated_listing){
        $query = "UPDATE listings SET address = $1, city = $2, state = $3, zip = $4, rent = $5, pic = $6, available = $7, category = $8 WHERE id = $9";
        $query_params = array($updated_listing->address,
        $updated_listing->city,
        $updated_listing->state,
        $updated_listing->zip,
        $updated_listing->rent,
        $updated_listing->pic,
        $updated_listing->available,
        $updated_listing->category, 
        $updated_listing->id);
        pg_query_params($query, $query_params);
        return self::all();
    }

    static function create($listing){
        $query = "INSERT INTO listings (address, city, state, zip, rent, pic, available, category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
        $query_params = array($listing->address, $listing->city, $listing->state, $listing->zip, $listing->rent, $listing->pic, $listing->available, $listing->category);
        pg_query_params($query, $query_params);
        return self::all();
    }

    static function all(){
        $listings = array();

        $results = pg_query("SELECT * FROM listings ORDER BY id ASC");
        $row_object = pg_fetch_object($results);

        var_dump($row_object);

        while($row_object !== false){

            $new_listing = new Listing(
                intval($row_object->id),
                $row_object->address,
                $row_object->city,
                $row_object->state,
                intval($row_object->zip),
                intval($row_object->rent),
                $row_object->pic,
                $row_object->available,
                $row_object->category
            );
           

            $listings[] = $new_listing;

            $row_object = pg_fetch_object($results);
        }

        var_dump($listings);

        return $listings;
    }
}
?>