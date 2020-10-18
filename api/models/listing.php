<?php

class Listing {
    public $listing_id;
    public $address;
    public $city;
    public $state;
    public $zip;
    public $rent;
    public $pic;
    public $available;
    public $category;


    public function __construct($listing_id, $address, $city, $state, $zip, $rent, $pic, $available, $category) {
        $this->listing_id  = $listing_id;
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

    static function delete($listing_id){
        $query = "DELETE FROM listings WHERE listing_id = $1";
        $query_params = array($listing_id);
        pg_query_params($query, $query_params);
        return self::all();
    }

    static function update($updated_listing){
        $query = "UPDATE listings SET address = $1, city = $2, state = $3, zip = $4, rent = $5, pic = $6, available = $7, category = $8 WHERE listing_id = $9";
        $query_params = array($updated_listing->address,
        $updated_listing->city,
        $updated_listing->state,
        $updated_listing->zip,
        $updated_listing->rent,
        $updated_listing->pic,
        $updated_listing->available,
        $updated_listing->category,
        $updated_listing->listing_id);
        pg_query_params($query, $query_params);
        return self::all();
    }

    static function create($listing){
        $query = "INSERT INTO listing (address, city, state, zip, rent, pic, available, category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
        $query_params = array($listing->address, $listing->city, $listing->state, $listing->zip, $listing->rent, $listing->pic, $listing->available, $listing->category);
        pg_query_params($query, $query_params);
        return self::all();
    }

    static function all(){
        $listings = array();

        $results = pg_query("SELECT * FROM listings ORDER BY listing_id ASC");
        $row_object = pg_fetch_object($results);

        while($row_object !== false){

            $new_listing = new Listing(
                intval($row_object->listing_id),
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



        return $listings;
    }
}
?>
