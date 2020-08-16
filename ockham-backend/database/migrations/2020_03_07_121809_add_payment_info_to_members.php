<?php

use App\Entities\Member;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddPaymentInfoToMembers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('members', function (Blueprint $table) {
            $table->string('location_signup')->nullable(true);
        });
        $memberTable = (new Member())->getTable();
        DB::table($memberTable)->whereNull('location_signup')->update(array('location_signup' => 'Unknown'));
        Schema::table('members', function (Blueprint $table) {
            $table->string('location_signup')->nullable(false)->change();
        });


        Schema::create('bank_accounts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('member_id');
            $table->string('debtor_name');
            $table->string('iban');
            $table->string('bic')->nullable();
            $table->boolean('authorization_contribution');
            $table->boolean('authorization_other');
            $table->timestamps();

            $table->foreign('member_id')
                ->references('id')
                ->on('members')
                ->onDelete('cascade');

            // This is a one-to-one table, so unique member_ids
            $table->unique('member_id');
        });

        Schema::create('contributions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('member_id');
            $table->unsignedInteger('contribution_number');
            $table->boolean('paid');
            $table->string('payment_method');

            $table->foreign('member_id')
                ->references('id')
                ->on('members')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bank_accounts');
        Schema::dropIfExists('contributions');

        Schema::table('members', function (Blueprint $table) {
            $table->dropColumn('location_signup');
        });
    }
}
