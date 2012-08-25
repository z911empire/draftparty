<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Hq extends CI_Controller {

	public function __construct() { 
		parent::__construct();
	}

	public function index() {
		$this->load->view('v_header');
		$this->load->view('v_draftparty');
		$this->load->view('v_footer');
	}

}
?>