package com.example.fcm2;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.messaging.FirebaseMessaging;

import java.util.HashMap;
import java.util.Map;

public class MainActivity extends AppCompatActivity {
    public String Token;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //lines below adds a listenter which creates a new token whenever a new device submited the app.
        FirebaseMessaging.getInstance().getToken()
                .addOnCompleteListener(new OnCompleteListener<String>() {
                    @Override
                    //onComplete is a firebaseMessagingService function which listens for token production
                    public void onComplete(@NonNull Task<String> task) {
                        //thorw exception if fail
                        if (!task.isSuccessful()) {
                            Log.w("failed !", "Fetching FCM registration token failed", task.getException());
                            return;
                        }

                        // Get new FCM registration token
                        String token = task.getResult();
                        Token = token;
                        // Log and toast the token
                        String msg = getString(com.google.firebase.database.collection.R.string.common_google_play_services_notification_ticker, token);
                        Log.d("message", msg);
                        Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();
                    }
                });

    }
    public void Request(View view) {
        //crating databese instance
        DatabaseReference mDatabase;
        mDatabase = FirebaseDatabase.getInstance().getReference();
        //saving nameTextField into String name
        TextView tempName = (TextView) findViewById(R.id.editTextFullName);
        String name = tempName.getText().toString();

        //creating a hash table containing name and token
        Map<String, String> map = new HashMap<>();
        map.put("name", name);
        map.put("Token", Token);
        //sending hash table to server
        mDatabase.child(Token).setValue(name);
    }
}